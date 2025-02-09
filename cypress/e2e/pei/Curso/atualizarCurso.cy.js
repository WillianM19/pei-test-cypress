describe('Atualizar curso', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Cursos no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'Cursos').click({force: true})
    })

    it('Fazer Edição de Curso', () => {
        cy.get("img[src='/static/images/icons/icon-edit-element.svg']").first().click({force: true})

        const novo_nome = `[Atualizado] Curso ${Math.random().toString(36).substring(2, 7)}`;

        cy.get("#id_name").clear().type(novo_nome);

        cy.contains("button", "Salvar").click();
    });

});