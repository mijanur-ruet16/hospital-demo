const doctors = ref([
  {
    name: "Lionel Messi",
    email: "messi@gmail.com",
    phone: "+8801700123456",
    address: "Inter Miami, USA",
  },
  {
    name: "Sergio Busquets",
    email: "busi@gmail.com",
    phone: "+8801700125555",
    address: "Inter Miami, USA",
  },
  {
    name: "Pep Guardiola",
    email: "pep@gmail.com",
    phone: "+8801700123687",
    address: "Manchester City, England",
  },
  {
    name: "Emi Martinez",
    email: "martinez@gmail.com",
    phone: "+8801700123111",
    address: "Aston Villa, England",
  },
  {
    name: "Di Maria",
    email: "maria@gmail.com",
    phone: "+8801700444456",
    address: "Benfica, Portugal",
  },
]);

export const useDoctor = () => {
  return doctors;
};
