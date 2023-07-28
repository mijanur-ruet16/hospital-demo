<template>
  <div
    class="bg-sky-950 min-h-screen flex items-center justify-center flex-col"
  >
    <h1 class="text-3xl font-bold text-center text-white mb-10">
      List of Hospitals
    </h1>

    <div>
      <table class="w-auto text-slate-100 rounded-md m-4">
        <thead>
          <tr>
            <th class="py-3 px-5">Name</th>
            <th class="py-5 px-5">Email</th>
            <th class="py-5 px-5">Phone</th>
            <th class="py-5 px-5">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="hospital in hospitals"
            :key="hospital"
            @click="navigateTo(`hospitals/${hospital.id}`)"
            class="cursor-pointer hover:bg-sky-900"
          >
            <td class="py-3 px-6">
              {{ hospital.name }}
            </td>
            <td class="py-3 px-6">{{ hospital.email }}</td>
            <td class="py-3 px-6">{{ hospital.phone }}</td>
            <td class="py-3 px-6">{{ hospital.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const hospitals = useHospitals();

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
