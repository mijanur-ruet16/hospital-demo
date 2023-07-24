<template>
  <div>
    <header
      class="flex sticky z-40 top-0 p-4 bg-sky-800 text-white gap-5 justify-between items-center"
    >
      <h1 class="text-xl font-mono">Doctor</h1>

      <div class="relative" @click="handleToggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </header>
    <div
      v-if="toggleTrue"
      class="absolute top-15 right-0 bg-sky-950 w-[200px] mr-2 z-50"
    >
      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <div class="flex flex-col">
            <h1 class="text-md text-white font-semibold">Name</h1>
            <p class="text-sm text-white">Email: test@test.com</p>
          </div>
        </div>
        <div class="border-t-[1px] text-center p-2">
          <button class="text-white text-md mt-2 mb-2 font-semibold">
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const toggleTrue = ref(false);

const handleToggle = () => {
  toggleTrue.value = !toggleTrue.value;
};
</script>

<style scoped></style>
