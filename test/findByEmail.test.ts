import { findByEmail } from "../src/findByEmail";
import { Contacto } from "../src/contactos";

describe("findByEmail", () => {
  test("por defecto, deben existir 10 contactos en la lista", () => {
    const contactos: Contacto[] = findByEmail("");
    expect(contactos).toHaveLength(10);
  });

  test("deberia existir un solo contacto con el email gcatt7@deviantart.com", () => {
    const contactos: Contacto[] = findByEmail("gcatt7@deviantart.com");
    expect(contactos).toHaveLength(1);
  });

  test("deberia existir un solo contacto con el email cfoss8@joomla.org ", () => {
    const contactos: Contacto[] = findByEmail("cfoss8@joomla.org");
    expect(contactos).toHaveLength(1);
  });

  test("deberian existir 5 contactos cuyo email termine en .com", () => {
    const contactos: Contacto[] = findByEmail(".com");
    expect(contactos).toHaveLength(5);
  });
});
