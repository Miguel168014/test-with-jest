import { unNumero, unString, esVerdadero } from "../src/data_types";

test("La constante unNumero, deberia valer exactamente 34", () => {
  expect(unNumero).toBe(34);
});

test("La constante unNumero, deberia ser del tipo number", () => {
  expect(typeof unNumero).toBe("number");
});

test('La constante unString deberia valer exactamente "Jhon"', () => {
  expect(unString).toBe("Jhon");
});

test("La constante unString deberia ser del tipo string", () => {
  expect(typeof unString).toBe("string");
});

test("La constante unVerdadero deberia valer 'true'", () => {
  expect(esVerdadero).toBe(true);
});

test("La constante unVerdadero deberia ser del tipo boolean", () => {
  expect(typeof esVerdadero).toBe("boolean");
});
