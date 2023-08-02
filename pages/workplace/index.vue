<template>
  <WorkPlace
    :doctorsList="doctorsList"
    @deleteData="deleteUser"
    @openWorkModal="setModal"
  />
  <WorkDetails
    v-if="modal"
    :doctorsList="doctorsList"
    :index="ind"
    @closeWork="hideModal"
    @deleteHospital="deleteHospital"
  />
</template>

<script setup>
const doctorsList = useDoctor();

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
  //window.location.reload(true);
};

const deleteHospital = (i) => {
  doctorsList.value[ind.value].workplace.splice(i, 1);
};
</script>

<style scoped></style>
