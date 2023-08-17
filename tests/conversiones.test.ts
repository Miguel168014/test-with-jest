import { sumaStrings } from "../src/conversiones";

test('sumaStrings("1", "3") deberia devolver 4', () => {
  const res = sumaStrings("1", "3");
  expect(res).toBe(4);
});
