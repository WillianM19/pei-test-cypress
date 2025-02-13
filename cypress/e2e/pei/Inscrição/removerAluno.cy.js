describe('Remover aluno de oferta', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Docente no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'Ofertas').click({force: true})
        cy.get("img[src='/static/images/icons/icon-eye.svg']").first().click({force: true})
    })

    it('Fazer remoção de aluno em oferta', () => {
        cy.get("img[src='/static/images/icons/icon-remove-element.svg']").first().click({force: true})

        //Confirmar a remoção
        cy.contains("h2", "Confirmar remoção de discente")
            .parent()
            .find("button.confirmDelete")
            .click({ force: true });
    });

});