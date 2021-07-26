import { InjectionKey } from "vue"
import useTokenAuth from "../composables/useTokenAuth"


const useTokenAuthKey: InjectionKey<typeof useTokenAuth> =  Symbol()


const InjectionKeys = {
     useTokenAuthKey
}


export default InjectionKeys