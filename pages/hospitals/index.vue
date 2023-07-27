<template>
  <div class="min-h-screen flex items-center justify-center bg-sky-950">
    <NuxtLink
      to="/hospitals/square"
      class="text-center bg-green-500 px-4 py-2 text-white rounded"
      >Square Hospital</NuxtLink
    >
  </div>
</template>

<script setup>
const route = useRoute();

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
