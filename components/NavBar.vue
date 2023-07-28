<template>
  <header
    class="sticky top-0 z-40 flex p-4 bg-sky-900 text-white gap-5 justify-between items-center"
  >
    <NuxtLink
      to="/"
      class="text-xl font-mono hover:text-gray-200 transition-all duration-150"
      >Doctor</NuxtLink
    >

    <div class="flex space-x-10 mr-2 items-center justify-center">
      <div>
        <NuxtLink
          to="/hospitals"
          class="text-md font-semibold hover:text-gray-200 transition-all duration-150"
          >Hospitals</NuxtLink
        >
      </div>

      <div v-if="user" class="relative" @click="handleToggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>
  </header>
  <div
    v-if="toggleTrue"
    class="absolute top-15 right-0 bg-[#242424] w-auto p-4 mr-1 z-50 rounded-lg"
  >
    <div class="flex flex-col items-center justify-center text-center">
      <h1 class="tagline mt-2 text-gray-300">Welcome</h1>
      <div class="mt-2 mb-4 h-0.5 w-16 rounded bg-[#42b883]"></div>
      <h3 class="font-semibold text-[#aac8e4]">Email</h3>
      <p class="text-base text-gray-400">{{ user.email }}</p>
      <button
        @click="userLogout"
        class="mt-8 rounded-md bg-[#42b883] px-3 py-1 font-semibold text-[#213547] transition-colors duration-500 hover:bg-[#42d392] focus:outline-none"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
const toggleTrue = ref(false);

const handleToggle = () => {
  toggleTrue.value = !toggleTrue.value;
};
const { auth } = useSupabaseAuthClient();
const user = useSupabaseUser();
const userLogout = async () => {
  await auth.signOut();
  toggleTrue.value = false;
  await navigateTo("/login");
};
</script>

<style scoped></style>
