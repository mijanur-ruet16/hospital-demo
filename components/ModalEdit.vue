<template>
  <div class="fixed inset-0 bg-stone-500/50">
    <div class="relative mt-10">
      <div class="bg-gray-700 w-[350px] h-[500px] absolute right-0 p-7">
        <form @submit.prevent="setD" class="flex flex-col gap-6 mt-4">
          <div class="flex flex-col">
            <label for="name" class="text-sm leading-7 text-gray-400"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              v-model.trim="name"
              class="w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
              required
            />
          </div>
          <div class="flex flex-col">
            <label for="email" class="text-sm leading-7 text-gray-400"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              class="w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
              required
            />
          </div>
          <div class="flex flex-col">
            <label for="phone" class="text-sm leading-7 text-gray-400"
              >Phone</label
            >
            <input
              type="tel"
              id="phone"
              name="phone"
              v-model="phone"
              class="w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
              required
            />
          </div>
          <div class="flex flex-col mb-4">
            <label for="address" class="text-sm leading-7 text-gray-400"
              >Address</label
            >
            <input
              type="text"
              id="address"
              name="address"
              v-model="address"
              class="w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
              required
            />
          </div>
          <div class="flex space-x-4 justify-end">
            <button
              class="border border-gray-500 px-3 py-1 rounded text-gray-400 hover:text-gray-200 transition-all duration-300 focus:outline-none"
              @click="emit('closeModal')"
            >
              Cancel
            </button>
            <button
              class="px-3 py-1 text-gray-300 bg-blue-700 rounded hover:bg-blue-800 hover:text-gray-200 transition-all duration-300"
              type="submit"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);
const doctors = useDoctor();

const props = defineProps({
  index: Number,
});

const name = ref(doctors.value[props.index].name);
const email = ref(doctors.value[props.index].email);
const phone = ref(doctors.value[props.index].phone);
const address = ref(doctors.value[props.index].address);

const setD = () => {
  doctors.value[props.index] = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
  };
  emit("closeModal");
};
//console.log(ind);
</script>

<style scoped></style>
