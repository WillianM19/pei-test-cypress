describe('Remover oferta', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Docente no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'Ofertas').click({force: true})
    })

    it('Fazer remoção de oferta', () => {
        cy.get("img[src='/static/images/icons/icon-remove-element.svg']").first().click({force: true})

        //Confirmar a remoção
        cy.contains("h2", "Confirmar Exclusão de oferta")
            .parent()
            .find("button.confirmDelete")
            .click({ force: true });
    });

});