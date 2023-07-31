<template>
  <Modal>
    <form @submit.prevent="setD" class="flex flex-col gap-6 mt-4">
      <div class="flex flex-col">
        <label for="name" class="text-sm leading-7 text-gray-400">Name</label>
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
        <label for="email" class="text-sm leading-7 text-gray-400">Email</label>
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
        <label for="phone" class="text-sm leading-7 text-gray-400">Phone</label>
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
  </Modal>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);

const props = defineProps({
  index: Number,
  doctors: Array,
});

const name = ref(props.doctors[props.index].name);
const email = ref(props.doctors[props.index].email);
const phone = ref(props.doctors[props.index].phone);
const address = ref(props.doctors[props.index].address);

const setD = () => {
  props.doctors[props.index] = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
  };

  emit("closeModal");
};
</script>

<style scoped></style>
