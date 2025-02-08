const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pei-hmg.nadic.ifrn.edu.br/",
    testIsolation: false //(se estiver false mantém os dados pós login)
  },
});
