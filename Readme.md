## Description 
The Objective of the project is to create the API that takes latitude and longitude coordinates and return country name in the response. 

## Architecture
There are many architectural patterns in different languages. But I'll prefer and I'm using MVC architecture. The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller.  It allows you to design, implemented, and tested each portion separately and still keeping the code organized. This helps you to find what is needed quickly, test features, and also allows adding functionality with ease. This means more efficient code, and it is also an effective way to re-use code for faster applications

## Tech Stack

1. Node Js
2. Express Js

## Packages

1. country-reverse-geocoding
I've used this node js package to get the country name using lat and long coordinates
Link: https://www.npmjs.com/package/country-reverse-geocoding

## Host
Currently, we don't have a server to host the application. So simply clone this repo and follow the installation guide and it's ready for you to test.

## API URL
http://localhost:8080/v1/country/:lat/:long

## Steps to Setup

1. Install dependencies

```bash
npm install
```

2. Run Server

```bash
npm run start
```
