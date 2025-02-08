describe('Realizar login do coordenador', () => {

    // id_login
    // id_password
    // button Entrar
    // grupo4-coordenador@gmail.com
    // 123deoliveira4

  it('Realizar login do coordenador com sucesso', () => {
    cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
  })

})