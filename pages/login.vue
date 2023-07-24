<script setup>
const email = ref("");
const password = ref("");
const errorMsg = ref("");

const login = () => {
  if (
    email.value === "" ||
    !email.value.includes("@") ||
    password.value === "" ||
    password.value.length < 6
  ) {
    errorMsg.value = "Invalid login credentials";
  } else {
    return navigateTo("/hospitals");
  }
  email.value = "";
  password.value = "";
};
</script>
<template>
  <div class="bg-sky-900">
    <div class="min-h-screen flex items-center justify-center flex-col">
      <div class="bg-sky-950 p-8 shadow-lg rounded-md">
        <h1 class="text-3xl font-black font-bold text-gray-100">
          Sign in to your account
        </h1>

        <form @submit.prevent="login" class="flex flex-col gap-3 mt-16">
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            class="p-2 rounded bg-charcoal-600"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            class="p-2 rounded bg-charcoal-600 mb-2"
          />
          <button
            type="submit"
            class="p-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 mb-2"
          >
            Log in
          </button>
          <p v-if="errorMsg" class="text-red-500 text-center font-bold">
            {{ errorMsg }}
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
