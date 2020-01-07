# Aurelia mongoDB Stitch Authentication Log
## 19 December 2019
### General
Today I solved a problem that is not documented in the Aurelia docs, now I tell you how.
Since my Authentication Plugin won't have a grafical interface, the user of the plugin has to do this by himself. And because of that I also don't won't the ` index.ts ` link eather. Until now index.ts has been like this:
``` ts
import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
      PLATFORM.moduleName('./auth-service')
  ]);
}
```
On the other side, that means the ` app.ts `, I had to import the auth-service also, but not like this:
``` ts
import {AuthService} from '../src/elements/auth-service'
```
If I'd to it like this, the path would only work for me but not for everybody, as it should be. So I had to to it another way.
Now we're coming to the part whitch was not documented by Aurelia.

Because I don't want a view for my plugin (that means that I have removed the auth-service.html file) I can't use the globalResources from Aurelia so I have to declare, or at least refer to the auth-service in the index.ts another way. It took a long time to figure this out, but this is how it goes:
``` ts
import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    //
]);
}

export { AuthService } from './auth-service'
```

As you can see, I have completely removed the auth-service from the global resources and refered to it with ` export { AuthService } from './auth-service' `. This single line makes it possible to use the ` auth-service `in in the ` app.ts ` over the ` index.ts `.

## 06 Jaruary 2020
### General
Today I have solved a problem where I wasn't able to find the login function per dependency injection. My code looked like this:
``` ts
.login(this.authEmail, this.authPassword)
  .then(authedUser => {
    // Code
  })
```
The Error that occured was `Unhandled Promise Rejection: Can't find variable: login`. That was because I had only written `.login(...)`. If you write it like that you create a new function named `login` but I want to use the login function from the dependency injection to the right way to declare it is:
``` ts
this.authService.login(this.authEmail, this.authPassword)
  .then(authedUser => {
    // Code
  })
```
After I changed that, everything worked fine.

## 07 Jaruary 2020
### General
Today I added a function where people can write their Stitch application ID in a  json file and the auth-service.ts file reads it out of that json file. This way it's way easier to comfigure the plugin. I have done this the following way.

>1. I created a json file named `appID.json`

The .json file look like this:
```json
{
  "applicationID": "mongodb-stitch-appid"
}
```
 The `mongodb-stitch.appid` has to be replaced with your own Stitch AppID.

 >2. I read the data of `applicationID` key in the .json file from the `auth-serivce.ts` file.

I read the data like this:
``` ts
import { applicationID } from './appID.json';

login(authEmail?: string, authPassword?: string): Promise<any> {
  // ...
  let client = Stitch.initializeAppClient(applicationID);
  // ...
}
```
And that's literally everything you have to to if you want to read data from a .json file in TypeScript.
