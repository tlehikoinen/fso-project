# fso-project

-  Template for MERN-stack with Redux.  
-  Uses Yarn workspaces and monorepo approach for having client/api in same repository
-  <a href="https://fso-pro.herokuapp.com/">Deployed to heroku</a>


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


### CI/CD pipeline
Push / Pull request to master starts pipeline which lints and runs tests with jest and cypress. On push when commit message doesn't contain "#skip code is deployed to heroku and version gets a tag.

