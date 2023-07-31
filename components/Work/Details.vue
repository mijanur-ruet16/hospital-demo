<template>
  <Modal>
    <form @submit.prevent="setData" class="flex flex-col gap-6 mt-6">
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
      <div class="flex flex-col">
        <label for="phone" class="text-sm leading-7 text-gray-400"
          >Workplace</label
        >

        <div v-for="(work, i) in workplace" class="mb-3">
          <div class="flex space-x-4 justify-between">
            <p class="text-white">
              {{ work }}
            </p>
            <p
              class="font-bold text-white bg-gary-500 border px-2 rounded text-xl"
              @click="emit('delHos', i)"
            >
              -
            </p>
          </div>
        </div>
        <p
          class="text-white text-center mt-6 text-green-500 mb-2 font-semibold"
        >
          Add Workplace
        </p>
        <div class="flex justify-between space-x-4">
          <input
            type="text"
            id="workplace"
            name="workplace"
            v-model.trim="workplaceNew"
            class="w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
          />
          <p
            class="px-3 py-2 bg-green-500 text-white rounded-md justify-center"
            @click="addWorkplace"
          >
            +
          </p>
        </div>
        <p v-if="errMsg" class="text-red-700 text-center font-semibold mt-2">
          Enter a value first!
        </p>
      </div>

      <div class="flex space-x-4 justify-end mt-3">
        <button
          class="border border-gray-500 px-3 py-1 rounded text-gray-400 hover:text-gray-200 transition-all duration-300 focus:outline-none"
          @click="emit('closeWork')"
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
const emit = defineEmits(["closeWork", "delHos"]);

const props = defineProps({
  index: Number,
  docs: Array,
});

//console.log(props.docs[props.index].workplace);

const workplace = ref(props.docs[props.index].workplace);
const name = ref(props.docs[props.index].name);
const phone = ref(props.docs[props.index].phone);

const workplaceNew = ref("");
const errMsg = ref(false);

const addWorkplace = () => {
  if (!workplaceNew.value) {
    errMsg.value = true;
    return;
  }

  workplace.value.push(workplaceNew.value);
  workplaceNew.value = "";
  errMsg.value = false;
};

console.log(workplace.value);

/* const worker = ref([]);
worker.value.push("Hello", "Kitty");
console.log(worker.value); */

const setData = () => {
  props.docs[props.index] = {
    name: name.value,
    phone: phone.value,
    workplace: workplace.value,
  };

  //props.docs[props.index].workplace = worker.value;
  emit("closeWork");
};
</script>

<style scoped></style>
