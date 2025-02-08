describe('Realizar Login', () => {

    // id_login
    // id_password
    // button Entrar
    // grupo4-professor@gmail.com
    // 123deoliveira4
    
  it('Realizar do login do professor com sucesso', () => {
    cy.login("grupo4-professor@gmail.com", "123deoliveira4")
  })

})