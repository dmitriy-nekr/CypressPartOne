const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 480,
  viewportHeight: 800,
  e2e: {
    baseUrl:'http://localhost:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
 
});