describe('Atualizar oferta', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Docente no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'Ofertas').click({force: true})
    })

    it('Fazer atualização de oferta', () => {
        cy.get("img[src='/static/images/icons/icon-edit-element.svg']").first().click({force: true})
        
        cy.get("#id_course").select(3);
        cy.get("#id_subject").select(3);
        cy.get("input[type='checkbox']").last().click({force: true})
        cy.get("#id_semester").select("2º Semestre")

        cy.contains("button", "Salvar").click();

        cy.url().should("contain", "/offers/list/")

    });

});