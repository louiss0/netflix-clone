<template>
<nav class="w-full">
    <div class="container w-5/6 mx-auto">
      <ul class="flex">
         <router-link  
         :to="{name}" 
         v-for="name of ['Home', 'About']"  
         :key="name"
         custom
         v-slot="{href, navigate, isActive, isExactActive,}">
        <li 
        class="px-8 py-12"
        :class="{'router-link-active': isActive,'router-link-exact-active':isExactActive,}">
          <a :href="href" @click="navigate "> {{name}} </a> 
        </li>
        </router-link> 
      </ul>
    </div>
</nav>    
</template>



<style lang="postcss" scoped>


.router-link-active{

    border-bottom: 2px solid rgba(17, 24, 39, var(--tw-border-opacity));
}



</style>