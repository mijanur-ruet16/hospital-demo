<template>
  <DoctorDetails
    :doctors="doctors"
    @delRow="deleteUser"
    @openModal="setModal"
  />
  <DoctorEdit
    v-if="modal"
    @closeModal="hideModal"
    :index="ind"
    :doctors="doctors"
  />
</template>

<script setup>
const doctors = ref([]);
const route = useRoute();
const allWorkplace = useHospitalAssignment();
const doctorsList = useDoctor();

const letPath = allWorkplace.value.filter((d) =>
  d.workplaceId.find((id) => id === parseInt(route.params.id))
);

console.log(letPath);

console.log(doctorsList.value.filter((doctor) => doctor.id === letPath[0].id));

doctors.value = doctorsList.value.filter(
  (doctor) => doctor.id === letPath[0].id
);

if (doctors.value.length === 0) {
  throw createError({
    statusCode: 404,
    statusMessage: "No data Found",
  });
}

const deleteUser = (index) => {
  doctors.value.splice(index, 1);
};

const modal = ref(false);
const ind = ref(null);

const setModal = (index) => {
  modal.value = true;
  ind.value = index;
};
const hideModal = () => {
  modal.value = false;
};

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
