describe('Cadastrar oferta', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Docente no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'Ofertas').click({force: true})
    })

    it('Fazer cadastro de oferta', () => {
        cy.contains('a', 'Cadastrar Nova Oferta').click({force: true})

        cy.wait(1000)
        
        cy.get("#id_course").select(2);
        cy.get("#id_subject").select(2);
        cy.get("input[type='checkbox']").first().click({force: true})
        cy.get("#id_status").select("Aberta")
        cy.get("#id_year").type("2025")
        cy.get("#id_semester").select("1º Semestre")

        cy.contains("button", "Salvar").click();

        cy.url().should("contain", "/offers/list/")

    });

});