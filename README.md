# Email Survey Web Application

A full stack web application using popular JavaScript projects featuring:

* User Authentication (OAuth - Google)
* Payment Processing (Stripe)
* Emailing (SendGrid)
* Survey Creation

## Tech

### Server

* Express
* MongoDB
* Passport

### Client

* React
* Redux

## Setup

Download or clone this repo:

### Server

Install server side npm packages

```sh
$ cd server
$ npm install
```

### Client

Install client side npm packages

```sh
$ cd server/client
$ npm install
```

### Environment variables

Local environment:

```sh
$ cd server/client/config
$ touch dev.js
$ npm install
```

Update dev.js with the following values

```js
module.exports = {
  googleClientID: '<insert client id from google oauth setup>',
  googleClientSecret: '<insert client secret from google oauth setup>',
  mongoURI: 'mongodb://<insert URI>',
  cookieKey: '<insert random string to represent cookie key>',
  stripePublishableKey: '<',
  stripeSecretKey: '...',
  sendGridKey: '...',
  redirectDomain: '...' //
};
```

Don't forget to setup your production environment with the corresponding environment variables listed in the prod.js file

## Run

```sh
$ npm run dev
```
