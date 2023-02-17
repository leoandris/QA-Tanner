class Menu {
    visitinveentory() {
      cy.visit('https://www.saucedemo.com/inventory.html')
      cy.url().should('include', '/inventory');
    }
  
    isProductLabelVisible() {
      cy.get('#inventory_container').should('be.visible')
    }

    clickLink(linkId) {
        cy.get(linkId).click();
    }
    
 
    Product4() {
        cy.url().should('include', '/inventory-item.html?id=4');        
    }

    Producto0() {
        cy.url().should('include', '/inventory-item.html?id=0');        
    }

    Producto1() {
        cy.url().should('include', '/inventory-item.html?id=1');        
    }

    Producto5() {
        cy.url().should('include', '/inventory-item.html?id=5');        
    }

    Producto2() {
        cy.url().should('include', '/inventory-item.html?id=2');        
    }

    Producto3() {
        cy.url().should('include', '/inventory-item.html?id=3')        
    }

}

export default Menu

