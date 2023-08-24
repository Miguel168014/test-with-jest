import { Contacto } from "./contactos";

const checkNewContact = (contacto: Contacto) => {
  return contacto.first_name != "" && contacto.last_name != "";
};

export { checkNewContact };
