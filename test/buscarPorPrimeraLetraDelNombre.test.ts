import { Contacto } from "../src/contactos";
import { buscarPorPrimerLetraDelNombre } from "../src/buscarPorPrimerLetraDelNombre";

describe("buscarPorPrimerLetraDelNombre", () => {
  test("deberia encontrar 3 contactos que empiecen con la letra M", () => {
    const contactos: Contacto[] = buscarPorPrimerLetraDelNombre("M");
    expect(contactos).toHaveLength(3);
  });

  test("deberia encontrar 3 contactos que empiecen con la letra m", () => {
    const contactos: Contacto[] = buscarPorPrimerLetraDelNombre("m");
    expect(contactos).toHaveLength(3);
  });

  test("deberia ordenar los contactos alfabeticamente por nombre, priorizando los que empiezan con la letra buscada", () => {
    const contactos: Contacto[] = buscarPorPrimerLetraDelNombre("M");
    expect(contactos[0].first_name).toBe("Marwin");
  });
});
