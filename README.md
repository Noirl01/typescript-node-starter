#NodeJS TypeScript Project Starter Template

##Files Tree

```
├── README.md
├── dist
│   └── index.js
├── jest.config.js
├── package-lock.json
├── package.json
├── server
│   ├── __tests__
│   └── index.ts
└── tsconfig.json
```

##Dependencies
typescript
jest
nodemon
dotenv-safe
express
prettier
eslint

##Development

###Directories
-`npm install` to install all required Dependencies
-**TypeScript** enviroment `/server`
-Entry point `index.ts`
-Support ES Modules imports with root alias to `import abc.js from "@server/filename"`

###Commands
-`npm start`
Builds the **TypeScript** into JavaScript and starts the compiled version of the application

-`npm dev`
Starts nodemon on the **TypeScript** version of the application

-`npm dev:lint`
Runs lint then starts **TypeScript** in Development Mode

-`npm test`
Runs tests using Jest

-`npm build`
Runs **TypeScript** compiler. Compiled files placed in /dist

-`npm prod`
Runs Linter, Tests, and then builds the project into /dist
