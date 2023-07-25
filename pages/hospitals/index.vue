<template>
  <div class="min-h-screen flex items-center justify-center bg-sky-950">
    <NuxtLink
      to="/hospitals/doctor"
      class="text-center bg-green-500 px-3 py-1 text-white rounded"
      >Click to see Available Doctors</NuxtLink
    >
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
