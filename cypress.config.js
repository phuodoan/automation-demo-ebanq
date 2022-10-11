const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Command timeout overridden for E2E tests
  e2e: {
    fixturesFolder: 'cypress/datasets',
    pageLoadTimeout: 120000,
    defaultCommandTimeout:10000,
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://demo.ebanq.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    videosFolder: 'cypress/reports/final/videos',
    screenshotsFolder: 'cypress/reports/final/screenshots',
    // baseUrl: "https://google.com",
    setupNodeEvents(on, config) {
        // require('cypress-xpath');
    },
  }
});