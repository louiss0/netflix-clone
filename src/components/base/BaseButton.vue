<template>
    <button @click="$emit('clicked')" >
        <slot>
        </slot>
    </button>
</template>