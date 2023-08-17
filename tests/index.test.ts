import HelloWorld from "../src/index";

test("HelloWorld deberia decir --Hello World", () => {
  expect(HelloWorld).toBe("Hello World");
});
