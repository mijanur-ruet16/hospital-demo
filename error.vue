<template>
  <div
    class="text-center min-h-screen flex items-center justify-center bg-sky-950"
  >
    <div class="shadow-lg rounded-xl w-[400px] bg-stone-900/50">
      <h1 class="text-2xl text-center text-white font-bold mt-5">
        Something went wrong!
      </h1>
      <h1 class="text-red-500 font-bold text-4xl mt-10">
        {{ error.statusCode }}
      </h1>

      <p class="text-lg mt-10 text-white">{{ error.statusMessage }}</p>

      <button
        @click="handleError"
        class="px-5 py-2 rounded-full text-white mt-10 mb-5 bg-green-500 hover:bg-green-700"
      >
        Go Home...
      </button>
    </div>
  </div>
</template>

<script setup>
const error = useError();
const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>
