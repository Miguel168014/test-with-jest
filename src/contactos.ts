type Contacto = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
};

const contactos: Contacto[] = [
  {
    id: 1,
    first_name: "Muhammad",
    last_name: "Alderwick",
    email: "malderwick0@google.es",
    gender: "Male",
    ip_address: "129.91.139.60",
  },
  {
    id: 2,
    first_name: "Clevey",
    last_name: "Cacacie",
    email: "ccacacie1@skype.com",
    gender: "Male",
    ip_address: "175.243.8.188",
  },
  {
    id: 3,
    first_name: "Hendrika",
    last_name: "Silbert",
    email: "hsilbert2@devhub.com",
    gender: "Female",
    ip_address: "20.60.238.2",
  },
  {
    id: 4,
    first_name: "Chad",
    last_name: "Fonzo",
    email: "cfonzo3@guardian.co.uk",
    gender: "Genderfluid",
    ip_address: "171.84.38.232",
  },
  {
    id: 5,
    first_name: "Kirsti",
    last_name: "Moss",
    email: "kmoss4@geocities.com",
    gender: "Bigender",
    ip_address: "116.218.180.93",
  },
  {
    id: 6,
    first_name: "Marwin",
    last_name: "Cutcliffe",
    email: "mcutcliffe5@sourceforge.net",
    gender: "Male",
    ip_address: "217.163.148.34",
  },
  {
    id: 7,
    first_name: "Hart",
    last_name: "Quibell",
    email: "hquibell6@ezinearticles.com",
    gender: "Male",
    ip_address: "197.215.16.120",
  },
  {
    id: 8,
    first_name: "Giff",
    last_name: "Catt",
    email: "gcatt7@deviantart.com",
    gender: "Male",
    ip_address: "199.179.57.74",
  },
  {
    id: 9,
    first_name: "Cam",
    last_name: "Foss",
    email: "cfoss8@joomla.org",
    gender: "Male",
    ip_address: "26.8.86.216",
  },
  {
    id: 10,
    first_name: "Sashenka",
    last_name: "Arnley",
    email: "sarnley9@ed.gov",
    gender: "Female",
    ip_address: "195.89.119.106",
  },
];

export { contactos, Contacto };
