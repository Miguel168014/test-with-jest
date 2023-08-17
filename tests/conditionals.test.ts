import { conditional } from "../src/conditionals";

// puntos extras si resolves este ejercicio en una sola linea (o maximo dos)

describe("La funcion conditional debe devolver un mensaje dependediendo de un parametro numerico", () => {
  test('Si el parametro numerico es menor a 18, debe devolver el mensaje "No se permite acceso"', () => {
    expect(conditional(17)).toBe("No se permite acceso");
  });

  test('Si el parametro numerico es mayor o igual a 18, debe devolver el mensaje "Acceso permitido"', () => {
    expect(conditional(18)).toBe("Acceso permitido");
  });
});
