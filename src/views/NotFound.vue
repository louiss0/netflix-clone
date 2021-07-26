<template>
    <div class="flex flex-col items-center w-full col-box">

    <h1 class="pt-12 pb-24 text-2xl text-gray-800 lg:text-4xl">Not Found   </h1>

    <h2 class="pb-24 text-xl lg:text-3xl"> Try going home or back  <span class="mr-2 text-2xl lg:text-4xl">&larr;</span>  </h2>

    <div class='flex flex-wrap p-8 text-sm lg:text-lg'>
        <router-link class="px-3 py-6 mx-5 my-10 text-lg text-gray-700 transition-transform ease-in transform bg-blue-500 rounded-lg duration-250 hover:bg-opacity-40 active:scale-90 hover:text-opacity-50" to="/">
            Go  Home
        </router-link>

        <base-button class="px-3 py-6 mx-5 my-10 text-lg text-gray-700 transition-transform ease-in transform bg-green-500 rounded-lg duration-250 hover:bg-opacity-40 active:scale-90 hover:text-opacity-50" @click="$router.back">
          &larr;  Go Back
        </base-button>

    </div>

    </div>

</template>
