describe('Remover curso', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Curso no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'Cursos').click({force: true})
    })


    it('Fazer remoção de Curso', () => {
        cy.get("img[src='/static/images/icons/icon-remove-element.svg']").first().click({force: true})

        //Confirmar a remoção
        cy.get("button[type='submit']").contains("Confirmar").click({force: true})
    });

});