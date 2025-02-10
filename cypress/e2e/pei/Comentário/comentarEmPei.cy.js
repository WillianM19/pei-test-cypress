describe('Comentar em PEI', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Docente no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'PEIs').click({force: true})
    })
    
    it('Fazer comentário em PEI', () => {
        cy.get("img[src='/static/images/icons/icon-eye.svg']").first().click({force: true})
        
        const comentario = `Comentário teste!!! ${Math.random().toString(36).substring(2, 7)}`
        cy.get("textarea[placeholder='Escreva um comentário aqui!']").type(comentario)
    
        //Fazer envio
        cy.get("button").contains("Enviar comentário").click({force: true})
    
        // Verificar se o comentário foi enviado
        cy.get("pre").contains(comentario).should("exist")
    });

});