const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  // Command timeout overridden for E2E tests
  e2e: {
    fixturesFolder: 'cypress/datasets',
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://demo.ebanq.com',
    specPattern: "cypress/e2e/features/*.feature",
    // chromeWebSecurity: false,
    videosFolder: 'cypress/reports/final/videos',
    screenshotsFolder: 'cypress/reports/final/screenshots',
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
  }
});