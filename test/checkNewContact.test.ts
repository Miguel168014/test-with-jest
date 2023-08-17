import { checkNewContact } from "../src/checkNewContact";
import { Contacto } from "../src/contactos";

describe("checkNewContact", () => {
  test("deberia dar por valido el nuevo contacto", () => {
    const contacto: Contacto = {
      id: 11,
      first_name: "Juan",
      last_name: "Perez",
      email: "jperez@gmail.com",
      ip_address: "123.434.434.4",
      gender: "Male",
    };

    const isValid = checkNewContact(contacto);
    expect(isValid).toBe(true);
  });

  test("deberia dar por invalido el nuevo contacto sin nombre", () => {
    const contacto: Contacto = {
      id: 11,
      first_name: "",
      last_name: "Perez",
      email: "jperez@gmail.com",
      ip_address: "123.434.434.4",
      gender: "Male",
    };

    const isValid = checkNewContact(contacto);
    expect(isValid).toBe(false);
  });

  test("deberia dar por invalido el nuevo contacto sin apellido", () => {
    const contacto: Contacto = {
      id: 11,
      first_name: "Juan",
      last_name: "",
      email: "jperez@gmail.com",
      ip_address: "123.434.434.4",
      gender: "Male",
    };

    const isValid = checkNewContact(contacto);
    expect(isValid).toBe(false);
  });
});
