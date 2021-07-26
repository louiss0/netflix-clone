<template>

        <label :for="name">
                {{label}}
        </label>
        <input 
        :id="name"  
        :value="modelValue"
        v-bind="{
            ...$attrs, 
            onInput:($event)=>
            $emit("update:modelValue", $event.target.value),
        }" 
        />
</template>

<script lang="ts">
import  { defineComponent } from 'vue'

   

export default defineComponent({
    inheritAttrs: false,
    props: {
        modelValue:{
            type: [String, Number],
            required:true
        },
        name:{
            type: String,
            required:true
        },
        label:{
            type: String,
            default:null
        },

       
    },
    
    })
</script>

