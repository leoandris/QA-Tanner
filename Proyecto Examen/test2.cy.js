import LoginPage from "../../support/PageObject/LoginPage.js";
import Menu from "../../support/PageObject/Menu.js";

const loginPage = new LoginPage();
const menu = new Menu();

/**
 * Prueba de verificación de la funcionalidad de los enlaces.
 */
describe("Verificación de la funcionalidad de los enlaces de productos", () => {
  /**
   * Prueba de inicio de sesión exitoso con credenciales válidas y verificación del enlace de inventario.
   */
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
     * Visita la página de inventario.
     * @function
     */
    menu.visitinveentory();
    /**
     * Verifica que la etiqueta de productos sea visible en el menú.
     * @function
     */
    menu.isProductLabelVisible();
  });

  /**
   * Verificación del enlace "Producto4".
   */
  it('Verificar enlace "Producto4"', () => {
    /**
     * Hace clic en el enlace del producto 4.
     * @function
     * @param {string} linkSelector - El selector del enlace del producto 4.
     */
    menu.clickLink("#item_4_title_link");
    /**
     * Verifica que se haya cargado la página del producto 4.
     * @function
     */
    menu.Producto4();
  });

  /**
   * Verificación del enlace "Producto0".
   */
  it('Verificar enlace "Producto0"', () => {
    /**
     * Hace clic en el enlace del producto 0.
     * @function
     * @param {string} linkSelector - El selector del enlace del producto 0.
     */
    menu.clickLink("#item_0_title_link");
    /**
     * Verifica que se haya cargado la página del producto 0.
     * @function
     */
    menu.Producto0();
  });

  /**
   * Verificación del enlace "Producto1".
   */
  it('Verificar enlace "Producto1"', () => {
    /**
     * Hace clic en el enlace del producto 1.
     * @function
     * @param {string} linkSelector - El selector del enlace del producto 1.
     */
    menu.clickLink("#item_1_title_link");
    /**
     * Verifica que se haya cargado la página del producto 1.
     * @function
     */
    menu.Producto1();
  });

  /**
   * Verificación del enlace "Producto5".
   */

  it('Verificar enlace "Producto5"', () => {
    /**
     * Hace clic en el enlace del producto 5.
     * @function
     * @param {string} linkSelector - El selector del enlace del producto 5.
     */
    menu.clickLink("#item_5_title_link");
    /**
     * Verifica que se haya cargado la página del producto 5.
     * @function
     */
    menu.Producto5();
  });

  /**
   * Verificación del enlace "Producto2".
   */

  it('Verificar enlace "Producto2"', () => {
    /**
     * Hace clic en el enlace del producto 2.
     * @function
     * @param {string} linkSelector - El selector del enlace del producto 2.
     */
    menu.clickLink("#item_2_title_link");
    /**
     * Verifica que se haya cargado la página del producto 2.
     * @function
     */
    menu.Producto2();
  });

  /**
   * Verificación del enlace "Producto3".
   */

  it('Verificar enlace "Producto3"', () => {
    /**
     * Hace clic en el enlace del producto 3.
     * @function
     * @param {string} linkSelector - El selector del enlace del producto 3.
     */
    menu.clickLink("#item_3_title_link");
    /**
     * Verifica que se haya cargado la página del producto 3.
     * @function
     */
    menu.Producto3();
  });
});