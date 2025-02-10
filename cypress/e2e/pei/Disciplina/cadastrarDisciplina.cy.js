describe('Cadastrar disciplina', () => {

    beforeEach("Realizar login do coordenador", () => {
        cy.login("grupo4-coordenador@gmail.com", "123deoliveira4")
    })

    it("Buscar a seção de Disciplinas no sistema", () => {
        cy.visit("/")
        cy.contains('a', 'Acadêmico').click({ force: true })
        cy.contains('p', 'Disciplinas').click({ force: true })
    })

    it('Fazer cadastro de Disciplina', () => {

        const nome = `Disciplina ${Math.random().toString(36).substring(2, 7)}`;
        const objetivo = "Objetivo de aprendizado da disciplina";
        const conteudo = "Conteúdo programático da disciplina";
        const metodologia = "Metodologia usada na disciplina";
        const recurso = "Recursos didáticos utilizados";
        const avaliacao = "Forma de avaliação da disciplina";


        cy.contains('a', 'Cadastrar Nova Disciplina').click({ force: true })

        cy.get('input[name="name"]').type(nome);

        cy.contains('label', 'Cursos:')
            .get('input[type="checkbox"][value="1"]')
            .click({ force: true });

        cy.contains('label', 'Duração:')
            .get('input[type="radio"][id="Anual"]')
            .click({ force: true });

        cy.get('textarea[name="objective"]').type(objetivo);  // Usando o name="objective" para o campo de objetivos

        cy.get('textarea[name="content"]').type(conteudo);  // Usando textarea, se for o caso

        cy.get('textarea[name="methodology"]').type(metodologia);  // Usando textarea, se for o caso

        cy.get('textarea[name="resources"]').type(recurso);  // Usando textarea, se for o caso

        cy.get('textarea[name="assessments"]').type(avaliacao);  // Usando textarea, se for o caso

        cy.contains("button", "Salvar").click();
    });

});
