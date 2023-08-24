import { contactos } from "./contactos";

function findByEmail(email: string) {
  return contactos.filter((contacto) => contacto.email.includes(email));
}
export { findByEmail };
