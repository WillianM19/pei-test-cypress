describe('Remover disciplina', () => {

    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Disciplinas no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({ force: true })
        cy.contains('p', 'Disciplinas').click({ force: true })
    })

    it('Fazer remoção de Disciplinas', () => {
        cy.get("img[src='/static/images/icons/icon-remove-element.svg']").first().click({ force: true })

        cy.get("button[type='submit']").contains("Confirmar").click({ force: true })
    });

});
