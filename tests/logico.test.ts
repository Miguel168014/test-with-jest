import { logico } from "../src/logico";

describe("La funcion logico, debe recibir dos strings y devolver un mensaje", () => {
  test('Si el primero es jaguilar.18@etec.uba.ar y el segundo es secreto, la funcion debe devolver "Logeado"', () => {
    expect(logico("jaguilar.18@etec.uba.ar", "secreto")).toBe("Logeado");
  });

  test('Si el primero es distinto a jaguilar.18@etec.uba.ar, la funcion debe devolver "Denegado"', () => {
    expect(logico("lbarni.18@etec.uba.ar", "1234")).toBe("Denegado");
  });
});
