<template>
<transition-group 
:appear="appear" 
:appear-class="appearClass"
:appear-active-class="appearActiveClass"
:appear-to-class="appearToClass"
:move-class="moveClass"
:leave-class="leaveClass"
:leave-to-class="leaveToClass"
:leave-active-class="leaveActiveClass"
:enter-class="enterClass"
:enter-to-class="enterToClass"
:enter-active-class="enterActiveClass"
:tag="tag"
:name="name"
:css="css">
    <slot v-if="iterableIsEmpty">
    
    
    </slot>
    
    <template v-for="(item) of getIterable"  v-else>
        <slot name="item" v-bind="item" >

        </slot>
    </template>
</transition-group>
</template>

<script lang="ts">
import { computed, defineComponent, } from 'vue'

export default defineComponent({
    props: {
        appearClass:{
            type:String,
            required:false
        },
        appearActiveClass:{
            type:String,
            required:false
        },
        appearToClass:{
            type:String,
            required:false
        },
        enterClass:{
            type:String,
            required:false
        },
        enterActiveClass:{
            type:String,
            required:false
        },
        enterToClass:{
            type:String,
            required:false
        },
        leaveClass:{
            type:String,
            required:false
        },
        leaveActiveClass:{
            type:String,
            required:false
        },
        leaveToClass:{
            type:String,
            required:false
        },
        name:{
            type:String,
            required:false
        },
        tag:{
            type:String,
            required:false
        },
        appear:{
            type:Boolean,
            required:false
        },
        css:{
            type:Boolean,
            required:false
        },
        moveClass:{
            type:String,
            required:false
        },
        iterable: {
            required:true,
            validator(value){

            if (Symbol.iterator in Object(value)) {
                
                return true 

            }

            console.log("value must be an iterable")
            return false

            }
        }
    },
    setup (props) {

        return {
            
            getIterable: computed(()=> props.iterable),
            
            
            iterableIsEmpty: computed(()=> {


                const iterableIsAMapAndIsNotEmpty=
                props.iterable instanceof Map && props.iterable.size === 0
                
                const iterableIsASetAndIsNotEmpty=
                
                props.iterable instanceof Set && props.iterable.size === 0

                
                if (iterableIsASetAndIsNotEmpty || iterableIsAMapAndIsNotEmpty) {
                    
                    return true
                }

                const iterableIsAnArrayAndIsNotEmpty = 
                Array.isArray(props.iterable) && props.iterable.length === 0  

                const iterableIsAStringAndIsNotEmpty = 
                props.iterable instanceof String  && props.iterable.length === 0

                if (iterableIsAnArrayAndIsNotEmpty || iterableIsAStringAndIsNotEmpty) {


                    return true
                    
                }


                return false

            })
        }
    }
})

</script>

