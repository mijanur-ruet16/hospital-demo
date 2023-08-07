<template>
  <WorkPlace @deleteData="deleteUser" @openWorkModal="setModal" />
  <WorkDetails
    v-if="modal"
    :index="ind"
    @closeWork="hideModal"
    @deleteHospital="deleteHospital"
  />
</template>

<script setup>
const { doctorsList } = storeToRefs(useDoctor());

const deleteUser = (index) => {
  doctorsList.value.splice(index, 1);
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

const deleteHospital = (i) => {
  doctorsList.value[ind.value].workplace.splice(i, 1);
};
</script>

<style scoped></style>
