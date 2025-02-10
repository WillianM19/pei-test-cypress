describe('Remover comentário em PEI', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Docente no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'PEIs').click({force: true})
    })
    
    it('Fazer remoção de comentário em PEI', () => {
        cy.get("img[src='/static/images/icons/icon-eye.svg']").first().click({force: true})
        
        cy.get("a").contains("Apagar").click({force: true})
    });

});