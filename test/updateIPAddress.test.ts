import { updateIPAddress } from "../src/updateIPAddress";
import { Contacto, contactos } from "../src/contactos";

describe("updateIPAddress", () => {
  test("deberia actualizar las ip al formato <ip_address>.<id>", () => {
    const actualizados: Contacto[] = updateIPAddress(contactos);
    const contactoActualizado = actualizados[0];
    expect(contactoActualizado.ip_address).toBe("129.91.139.60.1");
  });
});
