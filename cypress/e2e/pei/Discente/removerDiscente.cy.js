describe('Cadastrar docentes', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Discentes no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({ force: true })
        cy.contains('p', 'Discentes').click({ force: true })
        cy.get("#courseSearch").click({ force: true }).type("Tecnologia em Análise e Desenvolvimento de Sistemas Tecnologia", { force: true })
        cy.contains("label", "Tecnologia em Análise e Desenvolvimento de Sistemas Tecnologia").click()
        cy.contains("span", "Filtrar").click({ force: true })
    })

    it('Fazer edição do discente com sucesso e validação dos campos', () => {
        cy.get('img[src="/static/images/icons/icon-remove-element.svg"]').click()
        cy.contains("button", "Confirmar").click({force:true})
    });

});

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })
