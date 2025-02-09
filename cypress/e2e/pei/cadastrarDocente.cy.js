describe('Cadastrar docentes', () => {
    
    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Docente no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({force: true})
        cy.contains('p', 'Docentes').click({force: true})
    })

    it('Fazer cadastro de Discente', () => {

        // gerar dados aleatórios
        const nome = `Professor ${Math.random().toString(36).substring(2, 7)}`;
        const email = `${Math.random().toString(36).substring(2, 7)}@gmail.com`;
        const matricula = Math.floor(Math.random() * 1000000);
        const fileName = 'teacher.png';  
        const campus = "Pau dos Ferros";

        cy.contains('a', 'Cadastrar Docente').click({force: true})

        // envia imagem
        cy.get('input[type="file"]#photoAlt').attachFile(fileName);

        cy.get("#id_name").type(nome);
        cy.get("#id_email").type(email);
        
        // fazendo select do campos
        cy.get("#id_campus").select(campus);
        
        cy.get("#id_code").type(matricula);

        cy.contains("button", "Salvar").click();
    });

});