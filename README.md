# Aurelia MongoDB Stitch Authentication
## What is this
This Project is about an authentication plugin for the `Aurelia` Framework. `Aurelia` is a framework that empowers you to build components using vanilla JavaScript or TypeScript.

Anyway, this plugin allows you to quickly login to your MongoDB Stitch Appliation, for example via a normal HTML form. Until now, the plugin only supports the Email/Password user authentication for MongoDB Stitch.

## Prerequisites
To actually test this plugin you have to create an Aurelia test-application. To do this you have to use the Aurelia CLI. The fastest way to install the Aurelia CLI is to use `npm`, and `npm` is the nodeJS package-mananger. It will be installed at the same time as nodeJS itself, so follow the instruction to install nodeJS.

### Download and install nodeJS LTS
To actually run this project on your local machine, you fist have to install nodeJS LTS.
To do so, you have to download nodeJS LTS for your operating system on https://nodejs.org/en/download/

After the download is finished, run the downloaded file and follow the instructions of the installer.

## Run the Project
As we now have installed the important prerequisites, we can finally move on to testing this plugin in an web-application.

### Create an Aurelia Web-Application
The first step to create an Aurelia web-application is to fire up a Terminal window and change in a empty directory on your computer. Once you are there, you can now type the command to create a new Aurelia project.

```cmd
au new
```
You are now prompted to enter a name for the project. After you chose a name, hit enter and you will move on to the project setup. Now you an choose whether you want a ESNext or a TypeScript Application.

##### _Information about the project setup:_
_I have written this plugin and the example application all in TypeScript, so i would recommend to use TypeScript too if you are new to this. Otherwise, if you are experienced with ESNext you can choose ESNext of course._

As a last configuration step, you can choose if some `npm dependencies` should be installed or not. I recommend to install those, because it installs important packages for the application to run.

Now the Aurelia project is created and ready to use. Still in the Terminal, change into the project folder. You can start the application with the following command:
```cmd
au run --watch
```
The `--watch` parameter is used to activate the verbose mode while the project gets compiled.

As the compilation is finished, you can now open the browser under http://localhost:8080 to see the running application.

### Install the Plugin
To install the `aurelia-mongodb-stitch-authentication` plugin you have to change the directory to the top of the project. This is also where a file named `package.json` is located. Here you type:
```cmd
npm install --save-dev aurelia-mongodb-stitch-authentication
```
With the parameter `--save-dev`, npm automatically adds this package as a dependency to your `package.json` file.
This also means that if you can find the entry `aurelia-mongodb-stitch-authentication` under `dependencies` in the `package.json` file, that the installation surely worked.

### Importing the Plugin
Now as the authentication plugin is installed you can open up the project folder in an editor. In the folder `src` you can find three different files, `app.html`, `app.ts` and `index.ts`. In the file `app.ts` you can now import the plugin by adding this line:
```ts
import { AuthService } from 'aurelia-mongodb-stitch-authentication';
```
But before you can use the plugin you have to create an new file in the `src` folder with the name `appID.json`. Inside of this file add following line:

### The appID.json file
```json
{
  "applicationID": "mongodb-stitch-appid"
}
```
Replace the `mongodb-stitch-appid` variable with your own MongoDB Stitch Application ID from [http://stitch.mongodb.com/](http://stitch.mongodb.com/).


### Example Application
I made a example application where I use this plugin to authenticate to my MongoDB Stitch Appliation. You can download the `dev-app` folder where the example application is stored.
