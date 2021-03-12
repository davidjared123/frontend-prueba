<template>
    <div>
        <nav class="bg-blue-800 py-2 px-8 text-white rounded flex justify-between items-center">
            <div>
                <span class="font-bold mr-4 text-xl">LOGO</span>
                <ul class="inline">
                    <li class="inline ml-12"><a href="">Menu</a></li>
                    <li class="inline ml-12"><a href="">Menu</a></li>
                    <li class="inline ml-12"><a href="">Menu</a></li>
                    <li class="inline ml-12"><a href="">Menu</a></li>
                </ul>
            </div>
            <div class="user-img bg-blue-100 rounded-full h-10 w-10">
                <img src="@/assets/user.jpg" alt="User Image" class="rounded-full h-10 w-10 border border-light-blue-500 border-opacity-0 ">


                <div class="sub-menu absolute w-40 bg-white right-12 rounded grid shadow-md text-gray-400">
                    
                    <div>
                        <a href="" class="flex">
                            <div class="flex-shrink-0 px-3 py-2">
                                <img src="@/assets/user.jpg" alt="User Image" 
                                class="rounded-full h-5 w-5 border border-light-blue-500 border-opacity-0" >
                            </div>
                            <div class="profile py-2">
                                <h3 class="text-gray-600 text-sm">My Profile</h3>
                                <p class="text-xs">Change settings of your account</p>
                            </div>
                        </a>
                    </div>
                    <div class="px-3 py-1 border-t border-gray-300 text-red-500">
                        <button class="flex">
                            <svg class="w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                            </svg>
                            <p class="text-sm text-red-500">Logout</p>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <div class="router-nav px-5 py-3 ">
            <a href="" class="text-indigo-400">Home</a>
            <span class="text-indigo-400 mx-1">/</span>
            <a href="" class="text-indigo-400">Reports & Insight</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped>
.sub-menu{
    opacity: 0;
    transition: all 500ms;
}

.user-img:hover .sub-menu{
    display: block;
    opacity: 1;
}
</style>