# nodejs REST API example

A small example of REST API described at
https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

## Execution

start the server
```
~/git/nodejs/nodejs-rest $ npm run start

> todoListApi@0.0.0 start /home/frederic/git/nodejs/nodejs-rest
> nodemon server.js

[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
todo list RESTful API server started on: 3000

```
The server can be accessed at:

```
~/tmp $ curl http://localhost:3000/tasks
[{"name":"Go to the market","_id":"590b6152321e4733ff471aff","__v":0,"status":["pending"],"Created_date":"2017-05-04T17:13:54.929Z"}]
```

Todo:

* Include authentication
* Organize API with several CRUDs, eventually look for templating or automatic generation
* Search and filtering


