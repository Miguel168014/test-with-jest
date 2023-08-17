import { sorpresa } from "../src/constantes";

test('Deberia existir una constante llamada sorpresa con la palabra "Sorpresa"', () => {
  expect(sorpresa).toBe("Sorpresa");
});
