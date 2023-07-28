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
const doctors = useDoctor();

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
