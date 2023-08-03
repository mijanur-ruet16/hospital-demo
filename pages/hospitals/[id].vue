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
const doctorsList = ref([
  {
    name: "Lionel Messi",
    email: "messi@gmail.com",
    phone: "+8801700123456",
    address: "Mirpur, Dhaka",
    id: 1,
    workId: [1, 2],
  },
  {
    name: "Sergio Busquets",
    email: "busi@gmail.com",
    phone: "+8801700125555",
    address: "Mirpur, Dhaka",
    id: 2,
    workId: [1, 2, 3],
  },
]);
const doctors = ref([]);
const route = useRoute();

doctors.value = doctorsList.value.filter((doctor) =>
  doctor.workId.find((id) => id === parseInt(route.params.id))
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
