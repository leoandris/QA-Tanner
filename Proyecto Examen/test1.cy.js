import LoginPage from "../../support/PageObject/LoginPage.js";
import Menu from "../../support/PageObject/Menu.js";

const loginPage = new LoginPage();
const menu = new Menu();

/**
 * Prueba de inicio de sesión exitoso con credenciales válidas.
 */
describe("Inicio de sesión en SauceDemo", () => {
  it("Ingresar credenciales válidas", () => {
    /**
     * Visita la página de inicio de sesión.
     * @function
     */
    loginPage.visit();
    /**
     * Ingresa un nombre de usuario válido en el campo de usuario.
     * @function
     * @param {string} username - El nombre de usuario válido para ingresar.
     */
    loginPage.fillUsername("standard_user");
    /**
     * Ingresa una contraseña válida en el campo de contraseña.
     * @function
     * @param {string} password - La contraseña válida para ingresar.
     */
    loginPage.fillPassword("secret_sauce");
    /**
     * Envía el formulario de inicio de sesión.
     * @function
     */
    loginPage.submit();

    /**
     * Verifica que la etiqueta de productos sea visible en el menú.
     * @function
     */
    menu.isProductLabelVisible();
  });

  /**
   * Prueba de inicio de sesión fallido con credenciales inválidas.
   */
  it("Ingresar credenciales inválidas", () => {
    /**
     * Visita la página de inicio de sesión.
     * @function
     */
    loginPage.visit();
    /**
     * Ingresa un nombre de usuario inválido en el campo de usuario.
     * @function
     * @param {string} username - El nombre de usuario inválido para ingresar.
     */
    loginPage.fillUsername("invalid_user");
    /**
     * Ingresa una contraseña inválida en el campo de contraseña.
     * @function
     * @param {string} password - La contraseña inválida para ingresar.
     */
    loginPage.fillPassword("invalid_password");
    /**
     * Envía el formulario de inicio de sesión.
     * @function
     */
    loginPage.submit();

    /**
     * Verifica que se muestre el mensaje de error correcto.
     * @function
     */
    cy.get("h3").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});

