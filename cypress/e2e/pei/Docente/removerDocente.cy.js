
describe('Remover docente', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Docente no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'Docentes').click({force: true})
    })


    it('Fazer remoção de Discente', () => {
        cy.get("img[src='/static/images/icons/icon-remove-element.svg']").first().click({force: true})

        //Confirmar a remoção
        cy.get("button[type='submit']").contains("Confirmar").click({force: true})
    });

});