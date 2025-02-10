describe('Cadastrar aluno em oferta', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Docente no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'Ofertas').click({force: true})
    })

    it('Fazer cadastro de aluno em oferta', () => {
        cy.get("img[src='/static/images/icons/icon-eye.svg']").first().click({force: true})
    
        cy.get("#studentSearch").type("a")
        cy.get("input[type='checkbox']").first().click({force: true})
        cy.get("button").contains("Incluir").click({force: true})
    });

});