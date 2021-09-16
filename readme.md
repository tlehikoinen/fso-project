# fso-project

-  Template for mern-stack with redux.  
-  Uses yarn workspaces and monorepo approach for having client/api in same repository


## Setup
1. yarn install
2. make .env file to root with PORT, MONGODB_URI, TEST_MONGODB_URI variables and corresponding values

### Run in development mode
yarn start:dev

### Run in production mode
*builds client and moves it to api folder, deletes existing directory with same name (windows cmd)*  
yarn build:win  
yarn start:prod

**If everything works correctly, you should be able to add/delete messages**


## CI/CD pipeline
Commits to maste

