describe('Cadastrar docentes', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Discentes no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({ force: true })
        cy.contains('p', 'Discentes').click({ force: true })
        cy.get("#courseSearch").click({ force: true }).type("Tecnologia em Análise e Desenvolvimento de Sistemas Tecnologia", { force: true })
        cy.contains("label", "Tecnologia em Análise e Desenvolvimento de Sistemas Tecnologia").click()
        cy.contains("span", "Filtrar").click({ force: true })
    })

    it('Fazer edição do discente com sucesso e validação dos campos', () => {
        cy.get('img[src="/static/images/icons/icon-edit-element.svg"]').click({ force: true })

        const fileName = 'student.png'; 

        cy.get('input[type="file"]#id_image').attachFile(fileName);

        const nome = `Aluno ${Math.random().toString(36).substring(2, 7)}`;
        const email = `${Math.random().toString(36).substring(2, 7)}@gmail.com`;
        const matricula = Math.floor(Math.random() * 1000000);

        cy.get("#id_name").clear().type(nome);
        cy.get("#id_email").clear().type(email);
        cy.get("#id_registration").clear().type(matricula);

        cy.get("#submit-button").click()

        cy.get("#id_name").should("have.value", nome);
        cy.get("#id_email").should("have.value", email);
        cy.get("#id_registration").should("have.value", matricula);
    });

});

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })
