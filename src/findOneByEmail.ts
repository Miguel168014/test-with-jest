import { Contacto, contactos } from "./contactos";

function findOneByEmail(email: string): Contacto {
  for (const contacto of contactos) {
    if (contacto.email === email) {
      return contacto;
    }
  }
  return {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "",
  };
}
export { findOneByEmail };
