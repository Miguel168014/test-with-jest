import { findOneByEmail } from "../src/findOneByEmail";
import { Contacto } from "../src/contactos";

describe("findByEmail", () => {
  test("deberia existir un solo contacto con el email gcatt7@deviantart.com y se llama Giff", () => {
    const contacto: Contacto = findOneByEmail("gcatt7@deviantart.com");
    expect(contacto.first_name).toBe("Giff");
  });

  test("deberia existir un solo contacto con el email cfoss8@joomla.org y se llama Cam", () => {
    const contacto: Contacto = findOneByEmail("cfoss8@joomla.org");
    expect(contacto.first_name).toBe("Cam");
  });
});
