<template>
  <DoctorDetails
    :doctors="doctors"
    @delRow="deleteUser"
    @openModal="setModal"
  />
  <ModalEdit
    v-if="modal"
    @closeModal="hideModal"
    :index="ind"
    :doctors="doctors"
  />
</template>

<script setup>
const doctors_list = useDoctor();
const doctors = ref([]);

const route = useRoute();

doctors.value = doctors_list.value.filter(
  (doctor) => doctor.id === route.params.id
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

//const user = useSupabaseUser();
//console.log(user.value.email);

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
