import LoginPage from "../../support/PageObject/LoginPage.js";
import Menu from "../../support/PageObject/Menu.js";

/**
 * Instancia de la página de inicio de sesión.
 * @type {LoginPage}
 */
const loginPage = new LoginPage();

/**
 * Instancia del menú de la aplicación.
 * @type {Menu}
 */
const menu = new Menu();

/**
 * Tamaños de pantalla a comprobar.
 * @type {Array<string|number[]>}
 */
const viewports = ['iphone-6', 'ipad-2', [1024, 768]];

describe('Validar estilos responsive de pantalla en LoginPage', () => {
    
  /**
   * Comprueba la visualización de la página de inicio de sesión en varios tamaños de pantalla.
   * @function
   */
  it('Comprobar visualización en varios tamaños de pantalla', () => {
    cy.wrap(viewports).each((viewport) => {
      cy.viewport(viewport);

      /**
       * Visita la página de inicio de sesión.
       * @function
       */
      loginPage.visit();

      // Comprobaciones para tamaño de pantalla 'iphone-6'
      cy.get('[data-test=username]').should('be.visible');
      cy.get('[data-test=password]').should('be.visible');
      cy.get('[data-test=login-button]').should('be.visible');
      
      // Comprobaciones para tamaño de pantalla 'ipad-2'
      if (viewport == 'ipad-2') {
        cy.get('.bot_column').should('be.visible');
      }
      
      // Comprobaciones para tamaño de pantalla [1024, 768]
      if (viewport == [1024, 768]) {
        cy.get('.bot_column').should('be.visible');
      }
    });
  });
});

