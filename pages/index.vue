<template>
  <div class="min-h-screen flex items-center justify-center bg-sky-950">
    <h1 class="text-3xl font-bold text-white">Homepage</h1>
  </div>
</template>
<script setup>
//const user = useSupabaseUser();

definePageMeta({
  middleware: "auth",
});
</script>
