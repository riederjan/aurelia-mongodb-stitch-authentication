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
