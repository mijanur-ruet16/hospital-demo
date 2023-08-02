<template>
  <div class="bg-sky-950 min-h-screen flex items-center flex-col">
    <h1 class="text-3xl font-bold text-center text-white mb-10 mt-6">
      List of Doctors
    </h1>

    <div>
      <table class="w-auto text-slate-100 rounded-md m-4">
        <thead>
          <tr>
            <th class="py-3 px-5">Name</th>
            <th class="py-5 px-5">Phone</th>
            <th class="py-5 px-5">Workplace</th>
            <th class="py-5 px-5">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(doctor, index) in doctorsList"
            :key="index"
            class="cursor-pointer hover:bg-sky-900"
          >
            <td class="py-3 px-6">
              {{ doctor.name }}
            </td>
            <td class="py-3 px-6">{{ doctor.phone }}</td>
            <td class="py-3 px-6 space-y-2">
              <div v-for="work in doctor.workplace">
                {{ work }}
              </div>
            </td>
            <td class="py-3 px-6">
              <div class="flex items-center justify-center space-x-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#6b7a8a"
                  class="w-6 h-6 cursor-pointer hover:stroke-[#040dc4] hover:scale-110 transition-colors duration-200 ease-in-out"
                  @click="emit('openWorkModal', index)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#de0a26"
                  class="w-6 h-6 cursor-pointer hover:scale-110 transition-colors duration-200 ease-in-out"
                  @click="emit('deleteData', index)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  doctorsList: Array,
});

const emit = defineEmits(["deleteData", "openWorkModal"]);

const allWorkplace = useHospitalAssignment();
const hospitals = useHospitals();

const findWorkplace = (id) => {
  const letWork = allWorkplace.value.filter((doctor) => doctor.id === id);

  let workplace = [];
  letWork[0].workplaceId.filter((workplaceId) => {
    hospitals.value.filter((hospital) =>
      hospital.id === workplaceId ? workplace.push(hospital.name) : ""
    );
  });
  props.doctorsList[id - 1].workplace = workplace;
};

props.doctorsList.filter((doctor) => findWorkplace(doctor.id));
</script>

<style scoped></style>
