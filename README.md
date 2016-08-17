Angular 2 RC5 and Node js Easy Starter
======================================

## Prerequisites
- [Node.js](http://nodejs.org/) - install via
    - [homebrew](http://brew.sh/) on Macs
    - [chocolatey](http://chocolatey.org/) on Windows
    - or grab the installer from [the node.js website](http://nodejs.org/)
- [NPM](https://www.npmjs.org/) - this comes with Node.js
- [nodemon](http://nodemon.io) - automatically reload node server, however not necessary.
- Also going to need to get a stripe account to grab your api key and publisher key.

## Initial Setup
- Grab the source
- Run `(sudo) npm install` to get all the dependencies
- Setup database if need be and populate the fields in a secret.js file consumed by app.js (node server) or else comment the db connect out.
- Run `npm start` this will run your nodemon server which will allow you to access the app component
