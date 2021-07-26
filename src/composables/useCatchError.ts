import { ref } from "vue";





export default function useCatchError() {
    

    const errorState = ref<Error | null>(null)
    

    return {
        get error() {
            return errorState.value
        },

        get errorMessage() {
            
            return errorState.value?.message  || "Something went wrong"
        },
        
        get errorName() {
            return errorState.value?.name || "Unknown Error"

        },
        
        get errorStack() {
            return errorState.value?.message || "No Stack"

        },

        setErrorStateToNull() {
            errorState.value = null

        },
        
        
        setErrorStateToAnError(error: Error) {
            errorState.value = error

        }


    }


}