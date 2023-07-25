<template>
  <DoctorDetails :doctors="doctors" @delRow="deleteUser" />
</template>

<script setup>
const doctors = useDoctor();

const deleteUser = (index) => {
  doctors.value.splice(index, 1);
};

const user = useSupabaseUser();
console.log(user.value.email);

//console.log(user.$ssupabase_user.id);
//console.log(doctors.value);
definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
