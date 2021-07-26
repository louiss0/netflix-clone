import { computed, ref } from "vue";



export default function useBoolean(initBoolean = false) {
    


    const boolean = ref(initBoolean)


    return {
        boolean: computed(()=> boolean.value), 
        setToFalse() {
            boolean.value = false
         },
        setToTrue() {
            boolean.value = true

        },
        toggle() {
            boolean.value = !boolean.value

        }

    }

}