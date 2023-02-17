class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/')
    }
  
    fillUsername(value) {
      const field = cy.get('#user-name')
      field.clear()
      field.type(value)
      return this
    }
  
    fillPassword(value) {
      const field = cy.get('#password', { log: false })
      field.clear()
      field.type(value)
      return this
    }
  
    submit() {
      const button = cy.get('#login-button')
      button.click()
    }
  }

export default LoginPage