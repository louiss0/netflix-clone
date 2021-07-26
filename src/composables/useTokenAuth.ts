import { computed, ref,  watch } from "vue";

const [thousand, sixty, two]= [1000, 60, 2]

let timer: NodeJS.Timeout
let remainingTime: number


export default function useTokenAuth() {
    
    
    const storedToken = ref<string| null>(null) 
    const tokenExpirationDate = ref<Date | null>(null)
        
    const isLoggedIn = computed(() => !!storedToken.value)
    



    



    function getParsedToken<T>() {


        const token = localStorage.getItem("token")


        return token ? JSON.parse(token) as T : null



    }
    
    
    function getParsedTokenExpirationDate() {
        const tokenExpirationDate = localStorage.getItem("tokenExpirationDate")

        return tokenExpirationDate ? JSON.parse(tokenExpirationDate) as string : null

    }


    function logIn(token: string, expirationDate: Date | null = null) {

        storedToken.value = token

        tokenExpirationDate.value = expirationDate ||
            new Date((new Date().getTime() + thousand) * sixty ** two)

        localStorage.setItem("token", token)

        localStorage.setItem("tokenExpirationDate", tokenExpirationDate.value.toUTCString())



    }
    
    
    
    function logOut() {


        storedToken.value = null
        tokenExpirationDate.value = null
        localStorage.removeItem("token")
        localStorage.removeItem("tokenExpirationDate")


    }
    

    function autoLoginIfTokenExistsAndIsNotExpired() {
        


        const [parsedTokenIsAnObject, parsedTokenExpirationDateIsAString] = [
            getParsedToken(),
            getParsedTokenExpirationDate()
        ]

        const parsedTokenExpirationDateIsAStringAndTheDateIsGreaterThanNow =
            parsedTokenExpirationDateIsAString && Date.parse(parsedTokenExpirationDateIsAString) > Date.now()


        if (parsedTokenIsAnObject && parsedTokenExpirationDateIsAStringAndTheDateIsGreaterThanNow) {


            logIn(JSON.stringify(parsedTokenIsAnObject), new Date(parsedTokenExpirationDateIsAString as string))

        }




    }

    function autoLogoutIfTokenExistsButTheExpirationDateIsLessThanNow() {
        

        watch([storedToken, tokenExpirationDate], ([token, tokenExpirationDate]) => {


            if (token && tokenExpirationDate) {


                remainingTime = tokenExpirationDate.getTime() - new Date().getTime()

                timer = setTimeout(logOut, remainingTime)

            } else {

                clearTimeout(timer)

            }


        })

    }

    return {
        token: computed(()=> storedToken.value),
        tokenExpirationDate:computed(()=> tokenExpirationDate.value),
        isLoggedIn,
        getParsedToken,
        getParsedTokenExpirationDate,
        logIn,
        logOut,
        autoLoginIfTokenExistsAndIsNotExpired,
        autoLogoutIfTokenExistsButTheExpirationDateIsLessThanNow,        
    }


}

