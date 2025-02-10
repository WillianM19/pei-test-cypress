
describe('Editar docente', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Docente no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'Docentes').click({force: true})
    })


    it('Fazer Edição de Discente', () => {
        cy.get("img[src='/static/images/icons/icon-edit-element.svg']").first().click({force: true})
        const fileName = 'teacher.png';  
        const novo_nome = `[Atualizado] Professor ${Math.random().toString(36).substring(2, 7)}`;
        const novo_campus = "Apodi";

        // envia imagem
        cy.get('input[type="file"]#photoAlt').attachFile(fileName);

        cy.get("#id_name").clear().type(novo_nome);
        cy.get("#id_campus").select(novo_campus);

        cy.contains("button", "Salvar").click();
        cy.url().should("contain", "/teacher/list/")
    });

});