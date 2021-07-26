
<template>
<div v-if="show" 
class="absolute inset-0 z-30 flex flex-col items-center justify-center bg-gray-800 opacity-90"
v-on="$attrs">

<dialog :class="[dialogClass,'bg-gray-50 z-50 opacity-100']"  open>
    <slot></slot>
</dialog>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    functional: false,
    props:{
        show:{
            type:Boolean,
            required:true
        },
        dialogClass:{
            type:String,
            required:false
        }

    }
})
</script>

