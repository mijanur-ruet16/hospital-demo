export const useApplicationData = defineStore("application_data", () => {
  const doctorsList = ref([
    {
      name: "Lionel Messi",
      email: "messi@gmail.com",
      phone: "+8801700123456",
      address: "Mirpur, Dhaka",
      doctorId: 1,
    },
    {
      name: "Sergio Busquets",
      email: "busi@gmail.com",
      phone: "+8801700125555",
      address: "Mirpur, Dhaka",
      doctorId: 2,
    },
    {
      name: "Pep Guardiola",
      email: "pep@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 3,
    },
    {
      name: "Ronald Koeman",
      email: "koeman@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 4,
    },
    {
      name: "Ronald Araujo",
      email: "araujo@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 5,
    },
    {
      name: "Emi Martinez",
      email: "martinez@gmail.com",
      phone: "+8801700123111",
      address: "Mirpur-12, Dhaka",
      doctorId: 6,
    },
    {
      name: "Di Maria",
      email: "maria@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 7,
    },
    {
      name: "Joules Kounde",
      email: "kounde@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-11, Dhaka",
      doctorId: 8,
    },
    {
      name: "Di Stefano",
      email: "di@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-10, Dhaka",
      doctorId: 9,
    },
    {
      name: "Luis Suarez",
      email: "suarez@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 10,
    },
    {
      name: "Pablo Gavi",
      email: "gavi@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 11,
    },
    {
      name: "Luis Enrique",
      email: "suarez@gmail.com",
      phone: "+8801700444456",
      address: "Uttara, Dhaka",
      doctorId: 12,
    },
    {
      name: "Luis Menotti",
      email: "menotti@gmail.com",
      phone: "+8801700444456",
      address: "Uttara, Dhaka",
      doctorId: 13,
    },
    {
      name: "Diego Maradona",
      email: "d10@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-10, Dhaka",
      doctorId: 14,
    },
    {
      name: "Johan Cruyff",
      email: "johan@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 15,
    },
    {
      name: "Luis Scolari",
      email: "luis@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 16,
    },
    {
      name: "Robert Lewandowski",
      email: "lewa@gmail.com",
      phone: "+8801700444456",
      address: "Uttara, Dhaka",
      doctorId: 17,
    },
    {
      name: "Xavi Hernandez",
      email: "xavi@gmail.com",
      phone: "+8801700444456",
      address: "Uttara, Dhaka",
      doctorId: 18,
    },
    {
      name: "Diego Armando",
      email: "d10@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-10, Dhaka",
      doctorId: 19,
    },
    {
      name: "Jordi Cruyff",
      email: "jordi@gmail.com",
      phone: "+8801700444456",
      address: "Mirpur-12, Dhaka",
      doctorId: 20,
    },
    {
      name: "Lionel Andres",
      email: "messi@gmail.com",
      phone: "+8801700123456",
      address: "Mirpur, Dhaka",
      doctorId: 21,
    },
    {
      name: "Sergio Roberto",
      email: "roberto@gmail.com",
      phone: "+8801700125555",
      address: "Mirpur, Dhaka",
      doctorId: 22,
    },
    {
      name: "Pedri",
      email: "pedri@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 23,
    },
    {
      name: "Edgar Davids",
      email: "davids@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 24,
    },
    {
      name: "Jordi Alba",
      email: "alba@gmail.com",
      phone: "+8801700123687",
      address: "Mirpur, Dhaka",
      doctorId: 25,
    },
  ]);
  const allWorkplace = ref([
    {
      doctorId: 1,
      hospitalId: 1,
    },
    {
      doctorId: 1,
      hospitalId: 2,
    },
    {
      doctorId: 1,
      hospitalId: 3,
    },
    {
      doctorId: 2,
      hospitalId: 1,
    },
    {
      doctorId: 2,
      hospitalId: 2,
    },
    {
      doctorId: 3,
      hospitalId: 1,
    },
    {
      doctorId: 3,
      hospitalId: 3,
    },
    {
      doctorId: 4,
      hospitalId: 2,
    },
    {
      doctorId: 4,
      hospitalId: 5,
    },
    {
      doctorId: 5,
      hospitalId: 3,
    },
    {
      doctorId: 5,
      hospitalId: 4,
    },
    {
      doctorId: 6,
      hospitalId: 2,
    },
    {
      doctorId: 7,
      hospitalId: 3,
    },
    {
      doctorId: 8,
      hospitalId: 1,
    },
    {
      doctorId: 8,
      hospitalId: 2,
    },
    {
      doctorId: 9,
      hospitalId: 4,
    },
    {
      doctorId: 9,
      hospitalId: 5,
    },
    {
      doctorId: 10,
      hospitalId: 1,
    },
    {
      doctorId: 10,
      hospitalId: 3,
    },
    {
      doctorId: 11,
      hospitalId: 5,
    },
    {
      doctorId: 12,
      hospitalId: 3,
    },
    {
      doctorId: 12,
      hospitalId: 4,
    },
    {
      doctorId: 13,
      hospitalId: 1,
    },
    {
      doctorId: 13,
      hospitalId: 2,
    },
    {
      doctorId: 14,
      hospitalId: 3,
    },
    {
      doctorId: 15,
      hospitalId: 4,
    },
    {
      doctorId: 16,
      hospitalId: 1,
    },
    {
      doctorId: 17,
      hospitalId: 2,
    },
    {
      doctorId: 18,
      hospitalId: 3,
    },
    {
      doctorId: 19,
      hospitalId: 1,
    },
    {
      doctorId: 19,
      hospitalId: 4,
    },
    {
      doctorId: 20,
      hospitalId: 2,
    },
    {
      doctorId: 20,
      hospitalId: 3,
    },
    {
      doctorId: 21,
      hospitalId: 4,
    },
    {
      doctorId: 22,
      hospitalId: 2,
    },
    {
      doctorId: 23,
      hospitalId: 3,
    },
    {
      doctorId: 23,
      hospitalId: 4,
    },
    {
      doctorId: 24,
      hospitalId: 2,
    },
    {
      doctorId: 25,
      hospitalId: 1,
    },
    {
      doctorId: 25,
      hospitalId: 3,
    },
  ]);
  const hospitals = ref([
    {
      name: "Square Hospitals",
      email: "square@gmail.com",
      phone: "+88017001234567",
      address: "Dhaka, Bangladesh",
      hospitalId: 1,
    },
    {
      name: "Labaid Hospitals",
      email: "labaid@gmail.com",
      phone: "+88017001200125",
      address: "Dhaka, Bangladesh",
      hospitalId: 2,
    },
    {
      name: "Popular Hospitals",
      email: "popular@gmail.com",
      phone: "+88017001236879",
      address: "Rajshahi, Bangladesh",
      hospitalId: 3,
    },
    {
      name: "Ibn Sina Specialized Hospital",
      email: "ibnesina@gmail.com",
      phone: "+88017444231118",
      address: "Dhaka, Bangladesh",
      hospitalId: 4,
    },
    {
      name: "BIRDEM Hospital",
      email: "bardem@gmail.com",
      phone: "+88017004448797",
      address: "Dhaka, Bangladesh",
      hospitalId: 5,
    },
  ]);

  const findWorkplace = (id) => {
    const individualWorkplace = allWorkplace.value.filter(
      (doctor) => doctor.doctorId === id
    );

    let workplace = [];
    individualWorkplace.forEach((work) => {
      hospitals.value.forEach((hospital) =>
        hospital.hospitalId === work.hospitalId
          ? workplace.push(hospital.name)
          : ""
      );
    });
    doctorsList.value.forEach((doctor) =>
      doctor.doctorId === id ? (doctor.workplace = workplace) : ""
    );
  };

  return {
    doctorsList,
    findWorkplace,
    hospitals,
  };
});
