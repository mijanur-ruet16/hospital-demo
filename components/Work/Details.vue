<template>
  <Modal>
    <form @submit.prevent="setData" class="flex flex-col gap-4 mt-4">
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

        <div v-for="(work, i) in workplace" class="mb-2">
          <div class="flex space-x-3 justify-between items-center">
            <p class="text-white">
              {{ work }}
            </p>
            <p
              class="text-white bg-gary-500 px-2 rounded text-xl"
              @click="emit('deleteHospital', i)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </p>
          </div>
        </div>
        <p
          class="text-white text-center mt-6 text-green-500 mb-2 font-semibold"
        >
          Add Workplace
        </p>
        <div class="flex justify-between space-x-4 items-center">
          <input
            type="text"
            id="workplace"
            name="workplace"
            v-model.trim="workplaceNew"
            class="w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
          />
          <p
            class="px-3 py-3 flex bg-green-500 text-white rounded-md justify-center itmes-center"
            @click="addWorkplace"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </p>
        </div>
        <p v-if="errMsg" class="text-red-700 text-center font-semibold mt-2">
          Enter a value first!
        </p>
      </div>

      <div class="flex space-x-4 justify-end mt-2">
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
const emit = defineEmits(["closeWork", "deleteHospital"]);

const props = defineProps({
  index: Number,
  doctorsList: Array,
});

//console.log(props.docs[props.index].workplace);

const workplace = ref(props.doctorsList[props.index].workplace);
const name = ref(props.doctorsList[props.index].name);
const phone = ref(props.doctorsList[props.index].phone);
const doctorId = ref(props.doctorsList[props.index].doctorId);

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

const setData = () => {
  props.doctorsList[props.index] = {
    name: name.value,
    phone: phone.value,
    workplace: workplace.value,
    doctorId: doctorId.value,
  };
  console.log(workplace.value);
  emit("closeWork");
};
</script>

<style scoped></style>
