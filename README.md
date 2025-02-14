# Relatório de Testes E2E com Cypress 


Este relatório documenta o planejamento, execução e resultados dos testes end-to-end (E2E) realizados com Cypress. 


## **1. Objetivo** 
O objetivo dos testes E2E é garantir que as principais funcionalidades do sistema funcionem conforme esperado em um fluxo completo. 


## **2. Ferramentas Utilizadas** 
- Cypress
- Browser utilizado: Chrome 


## **3. Cenários de Teste** 
| **ID** | **Descrição** | **Prioridade** | 
|--------|---------------|---------------| 
| TC001  | Testar login com credenciais válidas | Alta | 
| TC002  | Testar cadastrar Docentes | Média | 
| TC003  | Testar editar Docentes | Média | 
| TC004  | Testar remover Docentes | Média | 
| TC005  | Testar cadastrar Curso | Média | 
| TC006  | Testar editar Curso | Média | 
| TC007  | Testar remover Curso | Média | 
| TC008  | Testar cadastrar Disciplina | Média | 
| TC009  | Testar editar Disciplina | Média |
| TC010  | Testar remover Disciplina | Média |  
| TC011  | Testar cadastrar Comentar PEI | Média |
| TC012  | Testar remover Comentar PEI | Média |
| TC013  | Testar cadastrar Discentes | Média | 
| TC014  | Testar editar Discentes | Média | 
| TC015  | Testar remover Discentes | Média |




## **4. Passos para Reproduzir** 
### **Cenário TC001 - Testar Login com Credenciais Válidas** 
**Pré-condições:** O usuário deve estar na página inicial da aplicação. 
**Passos:** 
1. Acessar a URL da aplicação. 
2. Inserir e-mail válido no campo "E-mail". 
3. Inserir senha válida no campo "Senha". 
4. Clicar no botão "Entrar". 


**Resultado Esperado:** 
O usuário deve ser redirecionado para o dashboard inicial com mensagem de confirmação. 


**Resultado Real:** 
Conforme esperado. 


---


### **Cenário TC002 - Cadastro de Docentes** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de cadastro de Docentes. 
2. Preencher o formulário e apertar no botão de Salvar. 


**Resultado Esperado:** 
Mensagem de confirmação exibida: "o professor foi cadastrado com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


### **Cenário TC003 - Editar de Docentes** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de editar Docentes. 
2. atualizar informações do formulário e apertar no botão de Salvar. 


**Resultado Esperado:** 
Mensagem de confirmação exibida: "o professor foi atualizado com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


### **Cenário TC004 - Remover Docentes** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de remover Docentes. 
2. Selecionar docente a ser removido do sistema. 
3. Clicar no botão de Confirmar.


**Resultado Esperado:** 
Mensagem de confirmação exibida: "o professor foi removido com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


### **Cenário TC005 - Cadastro de Curso** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de cadastro de Curso. 
2. Preencher o formulário e apertar no botão de Salvar. 


**Resultado Esperado:** 
Mensagem de confirmação exibida: "o curso foi cadastrado com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


### **Cenário TC006 - Editar Curso** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de editar Curso. 
2. atualizar informações do formulário e apertar no botão de Salvar. 


**Resultado Esperado:** 
Mensagem de confirmação exibida: "o curso foi atualizado com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


### **Cenário TC007 - Remover Curso** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de remover Curso. 
2. Selecionar o curso a ser removido do sistema. 
3. Clicar no botão de Confirmar.


**Resultado Esperado:** 
Mensagem de confirmação exibida: "o curso foi removido com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


### **Cenário TC008 - Cadastro de Disciplina** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de cadastro de Disciplina. 
2. Preencher o formulário e apertar no botão de Salvar. 


**Resultado Esperado:** 
Mensagem de confirmação exibida: "a disciplina foi cadastrado com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


### **Cenário TC009 - Editar de Disciplina** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de editar Disciplina. 
2. atualizar informações do formulário e apertar no botão de Salvar. 


**Resultado Esperado:** 
Mensagem de confirmação exibida: "a disciplina foi atualizado com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


### **Cenário TC010 - Remover Disciplina** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de remover Disciplina. 
2. Selecionar docente a ser removido do sistema. 
3. Clicar no botão de Confirmar.


**Resultado Esperado:** 
Mensagem de confirmação exibida: "a disciplina foi removido com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


### **Cenário TC011 - Cadastro de Comentar PEI** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de cadastro de Comentar PEI. 
2. Preencher o formulário e apertar no botão de Salvar. 


**Resultado Esperado:** 
Mensagem de confirmação exibida: "o comentar PEI foi cadastrado com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


### **Cenário TC012 - Remover de Comentar PEI** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de remover Comentar PEI. 
2. Selecionar Comentar PEI a ser removido do sistema. 
3. Clicar no botão de Confirmar. 


**Resultado Esperado:** 
Mensagem de confirmação exibida: "o comentar PEI foi removido com sucesso." 


**Resultado Real:** 
Conforme esperado.


---

### **Cenário TC0013 - Cadastro de Discentes** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de cadastro de Discentes. 
2. Preencher o formulário e apertar no botão de Salvar. 


**Resultado Esperado:** 
Mensagem de confirmação exibida: "O estudante foi cadastrado com sucesso." 


**Resultado Real:** 
Conforme esperado.

---

### **Cenário TC0014 - Editar de Discentes** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de editar Discentes. 
2. atualizar informações do formulário e apertar no botão de Salvar. 


**Resultado Esperado:** 
Mensagem de confirmação exibida: "O discente foi atualizado com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


### **Cenário TC0015 - Remover Discente** 
**Pré-condições:** O usuário deve estar autenticado. 
**Passos:** 
1. Navegar até a página de remover Discente. 
2. Selecionar docente a ser removido do sistema. 
3. Clicar no botão de Confirmar.


**Resultado Esperado:** 
Mensagem de confirmação exibida: "O discente foi removido com sucesso." 


**Resultado Real:** 
Conforme esperado.


---


## **5. Casos de Teste Planejados** 
| **ID** | **Cenário** | **Status** | **Observações** | 
|--------|------------|------------|----------------| 
| TC001  | Teste de Login | Aprovado | - | 
| TC002  | Testar cadastrar Docentes | Aprovado | - | 
| TC003  | Testar editar Docentes | Aprovado | - | 
| TC004  | Testar remover Docentes | Aprovado | - |  
| TC005  | Testar cadastrar Curso | Aprovado | - |  
| TC006  | Testar editar Curso | Aprovado | - |  
| TC007  | Testar remover Curso | Aprovado | - |  
| TC008  | Testar cadastrar Disciplina | Aprovado | - | 
| TC009  | Testar editar Disciplina | Aprovado | - | 
| TC010  | Testar remover Disciplina | Aprovado | - |   
| TC011  | Testar cadastrar Comentar PEI | Aprovado | - |
| TC012  | Testar remover Comentar PEI | Aprovado | - |
| TC013  | Testar cadastrar Discentes | Aprovado | - |  
| TC014  | Testar editar Discentes | Aprovado | - |  
| TC015  | Testar remover Discentes | Aprovado | - |  


## **6. Resultados da Execução** 
| **Caso de Teste** | **Execuções Bem-sucedidas** | **Falhas** | 
|------------------|-----------------------------|-----------| 
| TC001            | 10                          | 0         | 
| TC002            | 5                           | 0         | 
| TC003            | 8                           | 0         | 
| TC004            | 6                           | 0         |
| TC005            | 7                           | 0         |
| TC006            | 9                           | 0         |
| TC007            | 2                           | 0         |
| TC008            | 8                           | 0         |
| TC009            | 6                           | 0         |
| TC010            | 3                           | 0         |
| TC011            | 4                           | 0         |
| TC012            | 5                           | 0         |
| TC013            | 2                           | 0         |
| TC014            | 2                           | 0         |
| TC015            | 2                           | 0         |


## **7. Relatório de Incidentes** 


---


### **Considerações**
- O sistema foi testado com sucesso, não apresentando problemas significativos.
- Os principais casos de teste foram executados com sucesso.
- O sistema foi testado em diferentes máquinas, garantindo a funcionalidade e a estabilidade dos mesmos.
- Os CRUD's: Docentes, Curso e Disciplina(sendo estes os principais) estão se comportando conforme desejado e não apresenta problemas que possam prejudicar o sistema.


---


### **Assertivas e validações**
- Os testes estão validando os resultados de forma correta, conforme foi/é esperado;
- Os testes estão sendo executados de forma correta, sem problemas de execução;
- Os testes estão sendo executados em diferentes máquinas, garantindo a funcionalidade;


---


## **Conclusão** 
Os testes E2E demonstraram que a maioria das funcionalidades críticas está funcionando conforme esperado.



