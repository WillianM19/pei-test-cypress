describe('Cadastrar docentes', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Discentes no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'Discentes').click({force: true})
    })

    it('Fazer cadastro de Discente', () => {

        // gerar dados aleatórios
        const nome = `Aluno ${Math.random().toString(36).substring(2, 7)}`;
        const email = `${Math.random().toString(36).substring(2, 7)}@gmail.com`;
        const matricula = Math.floor(Math.random() * 1000000);
        const fileName = 'student.png';  
        const curso = "Tecnologia em Análise e Desenvolvimento de Sistemas Tecnologia - Vespertino";

        cy.contains('a', 'Cadastrar Novo Discente').click({force: true})

        // envia imagem
        cy.get('input[type="file"]#id_image').attachFile(fileName);

        cy.get("#id_name").type(nome);
        cy.get("#id_email").type(email);
        
        // fazendo select do curso
        cy.get("#id_course").select(curso);
        
        cy.get("#id_registration").type(matricula);
        cy.get("#id_reference_period").type(1);

        // selecionando equipe responsável
        cy.get('label[for="sector_ETEP"]').click();
        cy.get('#sector_ETEP').should('be.checked');

        // selecionando necessidade específica
        cy.get('label[for="17"]').click();
        cy.get('#17').should('be.checked');

        // histórico
        cy.get("#id_personal_history").type("teste");
        cy.get("#id_specific_necessities").type("teste");
        cy.get("#id_abilities").type("teste");
        cy.get("#id_dificulties").type("teste");
        cy.get("#id_general_necessitie").type("teste");
        cy.get("#id_creation_reasons").type("teste");

        cy.contains("button", "Salvar").click();

    });

});