describe('Cadastrar cursos', () => {

    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Cursos no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({ force: true })
        cy.contains('p', 'Cursos').click({ force: true })
    })

    it('Fazer cadastro de Curso', () => {

        // gerar dados aleatórios
        const nomeCurso = `Curso ${Math.random().toString(36).substring(2, 7)}`;

        cy.contains('a', 'Cadastrar Novo Curso').click({ force: true })

        cy.get("#id_name").type(nomeCurso);

        cy.get("#id_period").select("MORNING"); // Seleciona o turno "Matutino"

        cy.get("#id_duration_type").select("Anual"); // Seleciona o turno "Matutino"

        cy.get("#id_course_type").select("Técnico Integrado Regular"); // Seleciona o turno "Matutino"

        cy.contains("button", "Salvar").click();

    });

});