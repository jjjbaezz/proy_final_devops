/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

test("La página contiene el título '¡Hola Mundo desde DevOps!'", () => {
  const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
  document.body.innerHTML = html;

  const h1 = document.querySelector("h1");
  expect(h1.textContent).toBe("¡Hola Mundo desde DevOps!");
});

