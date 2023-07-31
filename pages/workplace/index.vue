<template>
  <WorkPlace :docs="docs" @delData="deleteUser" @openWorkModal="setModal" />
  <WorkDetails
    v-if="modal"
    :docs="docs"
    :index="ind"
    @closeWork="hideModal"
    @delHos="deleteHos"
  />
</template>

<script setup>
const docs = ref([
  {
    name: "Lionel Messi",
    phone: "+8801700123456",
    workplace: ["Square Hospitals", "Popular Hospitals"],
    workplaceId: 1,
  },
  {
    name: "Sergio Busquets",
    phone: "+8801700125555",
    workplace: ["Square Hospitals", "Popular Hospitals", "Labaid Hospitals"],
    workplaceId: 2,
  },
  {
    name: "Lionel Scaloni",
    phone: "+8801700123789",
    workplace: ["BIRDEM Hospital", "Popular Hospitals"],
    workplaceId: 1,
  },
]);

const deleteUser = (index) => {
  docs.value.splice(index, 1);
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

const deleteHos = (i) => {
  docs.value[ind.value].workplace.splice(i, 1);
};
</script>

<style scoped></style>
