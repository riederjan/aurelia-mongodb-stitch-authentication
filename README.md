# Aurelia MongoDB Stitch Authentication
## Abstract
This project is an authentication plugin for the `Aurelia` Framework. `Aurelia` is a framework that allows you to build components using vanilla JavaScript or TypeScript.

This plugin allows you to quickly log in to your MongoDB Stitch Application, for example via a standard HTML form. Until now, the plugin only supports Email/Password user authentication for MongoDB Stitch.

## Prerequisites
To actually test this plugin you have to create an Aurelia test-application. To do this you have to use the Aurelia CLI. The fastest way to install the Aurelia CLI is to use `npm`, the nodeJS package-manager. It will be installed at the same time as nodeJS itself, so follow the instructions to install nodeJS.

### Download and install nodeJS LTS
To run this project on your local machine, you first have to install nodeJS LTS.
To do so, you have to download nodeJS LTS for your operating system on https://nodejs.org/en/download/

After the download is finished, open the file and follow the instructions of the installer.

## Run the Project
As we have now installed the important required packages, we can finally move on to testing this plugin in a web-application.

### Create an Aurelia Web-Application
The first step to create an Aurelia web-application is to fire up a terminal window and go to an empty directory on your computer. Once you are there, you can now type the following command to create a new Aurelia project.

```cmd
au new
```
You are now prompted to enter a name for the project. After you choose a name, hit enter and you will move on to the project setup. Now you can choose whether you want to create an ESNext or a TypeScript Application.

##### _Information about the project setup:_
_The plugin and the example application are both written in TypeScript, so I recommend using TypeScript too if you are new to this. Otherwise, if you are experienced with ESNext then you can of course use it instead._

The last configuration step is to choose whether certain `npm dependencies` should be installed or not. I recommend doing this, because it installs important packages for the application to run.

Now the Aurelia project is created and ready to use. While still in the terminal, go into the project folder. You can start the application with the following command:
```cmd
au run --watch
```
The `--watch` parameter is used to activate verbose mode while the project is compiled.

When the compilation is finished, you can open the browser under http://localhost:8080 to see the application running.

### Install the Plugin
To install the `aurelia-mongodb-stitch-authentication` plugin you have to change the directory to the root of the project. This is also where a file named `package.json` is located. Here you type:
```cmd
npm install --save-dev aurelia-mongodb-stitch-authentication
```
With the parameter `--save-dev`, npm automatically adds this package as a dependency to your `package.json` file.
This also means that if you can find the entry `aurelia-mongodb-stitch-authentication` under `dependencies` in the `package.json` file, that the installation surely worked.

### Importing the Plugin
Now that the authentication plugin is installed you can open up the project folder in an editor. In the folder `src` you can find three different files, `app.html`, `app.ts` and `index.ts`. In the file `app.ts` you can now import the plugin by adding this line:
```ts
import { AuthService } from 'aurelia-mongodb-stitch-authentication';
```
But before you can use the plugin you have to create a new file in the `src` folder with the name `appID.json`. In this file, add the following line:

### The appID.json file
Paste this piece of code into your appID.json file and replace `mongodb-stitch-appid` with your real MongoDB Stitch Application ID.
```json
{
  "applicationID": "mongodb-stitch-appid"
}
```
Replace the `mongodb-stitch-appid` variable with your own MongoDB Stitch Application ID from [http://stitch.mongodb.com/](http://stitch.mongodb.com/).

### Some example functions
Now you have successfully installed the `aurelia-mongodb-stitch-authentication` plugin for an Aurelia application. Written here are some of the important functions. For example, the login function can look like this:
```ts
authenticate(){
  this.authService.login(this.authEmail, this.authPassword)
    .then(() => {
      console.log("logged in")
    })
}
```
In this little piece of code, there is a `console.log()` output, for when the login is successful.

Another principle function is the `logout` function. Once you know how to implement a login function, the logout function is not complicated:
```ts
logout(){
  this.authService.logout()
    .then (() => {
      console.log("logged out")
    })
}
```
Here I have a console output too; for when the logout is successful.

### Optional: The dev-app
##### Setting up the dev-app
I made an example application where I used this plugin to authenticate to my MongoDB Stitch Application. You can download the `dev-app` folder from this project where the example application is stored. Once you have downloaded and unpacked this project, you have to open up a terminal window.

In the terminal, navigate to the unpacked folder.
From there go into the directory `aurelia-mongodb-stitch-authentication` and then type `npm install` to install all dependencies for the aurelia-mongodb-stitch-authentication application. As soon as the dependencies are installed you can type `npm start` to start the application. Now it is available in the browser under http://localhost:9000.

##### Using the dev-app
To test the dev-app, you only have to edit the `appID.json` file and insert your own MongoDB Stitch Application ID. Once you have done this, you are able to login with a user in your application.
