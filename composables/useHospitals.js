const hospitals = ref([
  {
    name: "Square Hospitals",
    email: "square@gmail.com",
    phone: "+88017001234567",
    address: "Dhaka, Bangladesh",
    id: "square",
  },
  {
    name: "Labaid Hospitals",
    email: "labaid@gmail.com",
    phone: "+88017001200125",
    address: "Dhaka, Bangladesh",
    id: "labaid",
  },
  {
    name: "Popular Hospitals",
    email: "popular@gmail.com",
    phone: "+88017001236879",
    address: "Rajshahi, Bangladesh",
    id: "popular",
  },
  {
    name: "Ibn Sina Specialized Hospital",
    email: "ibnesina@gmail.com",
    phone: "+88017444231118",
    address: "Dhaka, Bangladesh",
    id: "ibnsina",
  },
  {
    name: "BIRDEM Hospital",
    email: "bardem@gmail.com",
    phone: "+88017004448797",
    address: "Dhaka, Bangladesh",
    id: "birdem",
  },
]);

export const useHospitals = () => {
  return hospitals;
};
