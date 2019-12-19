# Aurelia mongoDB Stitch Authentication Log
## 13 December 2019
### General
I found out why I keep getting the following error message:
` Refused to execute http://localhost:9000/src/elements/auth-sasdervice.js as script because "X-Content-Type: nosniff" was given and its Content-Type is not a script MIME type. `

` Failed to load resource: the server responded with a status of 404 (Not Found) `

Those error messages appear together if you create a new element and name it wrong. A new element (mine was authService) has to be written like the sample element: hello-world.
That would mean if have to write my elements name like: auth-service. After I've done that, all worked fine again.

### Problems
Currently I don't know why the auth-service.html and the auth-service.ts wont exchange informations like variables.
