# automation-test
This project is using the Cypress framework to demo for the assessment.

## Prerequisites
- Node is installed [Guide](https://nodejs.org/en/download/package-manager/)
- All packages installed using `npm i`

## Commands
- `npm run cypress:open` to launch to test on UI by using testRunner
- `npm run cy:browser:chrome` to run tests in chrome headlessly
- `npm run cy:browser:firefox` to run tests in firefox headlessly
- `npm run cy:browser:edge` to run tests in MS edge headlessly
- `npm run cy:browser:electron` to run tests in electron headlessly

## Project Structure
```
├── cypress
│   ├── datasets        -- Test data or mock data files
│   ├── e2e             -- This is where the test is
│   ├── interfaces      -- Page objects
│   ├── actions         -- Page objects
│   ├── reports         -- Store videos/ screenshots report
│   └── support
```

## Notes

- The project is written in javascript using ABT pattern (Action Based Testing).
- Please use `Visual Studio Code` or `Atom` to review the code to make sure it correct style.
- Please make sure browsers need to be available on your system
