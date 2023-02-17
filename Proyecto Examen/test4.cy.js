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

describe('Verificación de la funcionalidad del carrito de compras', function() {
       
    /**
     * Visita la página de inicio de sesión y realiza el inicio de sesión con un usuario y contraseña.
     * @function
     */
    it('Visitar la página de inicio de sesión', function() {
      loginPage.visit();
      loginPage.fillUsername("standard_user");
      loginPage.fillPassword("secret_sauce");
      loginPage.submit();

      menu.isProductLabelVisible();
    });
    
    /**
     * Agrega el primer producto de la lista al carrito haciendo clic en el botón "ADD TO CART".
     * @function
     */
    it('Agrega un producto al carrito haciendo clic en el botón "ADD TO CART"', function() {
      cy.get('.inventory_list .btn_primary').first().click();
    });
    
    /**
     * Verifica que el producto se agregó correctamente al carrito haciendo clic en el icono del carrito.
     * @function
     */
    it('Verifica que el producto está en el carrito haciendo clic en el icono del carrito', function() {
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length', 1);
      cy.get('.cart_item .inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    });

    /**
     * Realiza la compra del producto en el carrito haciendo clic en el botón "CHECKOUT" en la página del carrito.
     * @function
     */
    it('Realiza la compra haciendo clic en el botón "CHECKOUT" en la página del carrito', function() {
      cy.get('.cart_checkout_link').click();
      cy.get('#checkout_info_container input').eq(0).type('Nombre');
      cy.get('#checkout_info_container input').eq(1).type('Apellido');
      cy.get('#checkout_info_container input').eq(2).type('12345');
      cy.get('#continue').click();
      cy.get('#finish').click();
    });

    /**
     * Verifica que la compra se realizó correctamente y que se redirigió a la página de confirmación.
     * @function
     */
    it('Verifica que la compra se realizó correctamente y que se redirigió a la página de confirmación', function() {
      cy.url().should('include', '/checkout-complete.html');
      cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
    });

});

