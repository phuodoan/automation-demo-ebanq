# automation-test
This project is using the Cypress framework to demo for the assessment.

## Prerequisites
- Node is installed [Guide](https://nodejs.org/en/download/package-manager/)
- All packages installed using `npm i`

## Commands
- `npm run cypress:open` to launch to test on UI by using testRunner
- `npm run cy:run:chrome` to run tests in chrome headlessly
- `npm run cy:run:firefox` to run tests in firefox headlessly
- `npm run cy:run:edge` to run tests in MS edge headlessly
- `npm run cy:run:electron` to run tests in electron headlessly

## Project Structure
```
├── cypress
│   ├── datasets        -- Test data or mock data files
│   ├── e2e/features    -- This is where the tests is
│   ├── interfaces      -- Page objects
│   ├── actions         -- Page objects
│   ├── reports         -- Store videos/ screenshots report
│   └── support
```

## Notes

- The project is written in javascript using ABT pattern (Action Based Testing).
- Please use `Visual Studio Code` or `Atom` to review the code to make sure it correct style.
- The plugin `Cucumber` should add on VS to see the cucumber keywords on feature files.
- Please make sure browsers need to be available on your system
