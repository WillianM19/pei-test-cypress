describe('Atualizar Disciplina', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Disciplina no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({ force: true })
        cy.contains('p', 'Disciplinas').click({ force: true })
    })

    it('Fazer Edição de Disciplinas', () => {
        cy.get("img[src='/static/images/icons/icon-edit-element.svg']").first().click({ force: true })

        const novo_nome = `[Atualizado] Disciplinas ${Math.random().toString(36).substring(2, 7)}`;

        cy.get('input[name="name"]').clear().type(novo_nome, { force: true });

        cy.contains("button", "Salvar").click();

        cy.contains(novo_nome).should('exist');
    });

});
