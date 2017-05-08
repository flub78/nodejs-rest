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

## Todo

* Include authentication
* Organize API with several CRUDs (done) 
* eventually look for templating or automatic generation
* Search and filtering

## Links

    * https://app.swaggerhub.com/apis/flub78/todoList/1.0.0
    * https://apihandyman.io/writing-openapi-swagger-specification-tutorial-part-1-introduction/
    * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md
    * http://openapi-specification-visual-documentation.apihandyman.io/
    
## Tests

### Using curl
* curl http://localhost:3000/tasks
* curl -d "name=go to the market" -X POST http://localhost:3000/tasks

### Using Postman

Postman is a graphical tool to generate html requests.

```
POST http://localhost:3000/tasks
Request Headers:
  cache-control:"no-cache"
  Postman-Token:"1c8e2b8c-becf-4a5a-9125-3635a4df3a8f"
  Content-Type:"application/x-www-form-urlencoded"
  User-Agent:"PostmanRuntime/3.0.11-hotfix.2"
  Accept:"*/*"
  Host:"localhost:3000"
  accept-encoding:"gzip, deflate"
  content-length:19
Response Headers:
  connection:"keep-alive"
  content-length:"125"
  content-type:"application/json; charset=utf-8"
  date:"Sun, 07 May 2017 09:01:13 GMT"
  etag:"W/"7d-YaR56vYZ7PBP0V2yROqKES6w0fw""
  x-powered-by:"Express"
Response Body:
  __v:0
  name:"Go to vote"
  _id:"590ee25978212139cde0785d"
  status:
    0:"pending"
  Created_date:"2017-05-07T09:01:13.084Z"
Request Body:
  mode:"urlencoded"
  urlencoded:
    0:
      disabled:false
      key:"name"
      value:"Go to vote"
200
640 ms
```

## Documentation

Swagger is an environment to automatically generate Documentation and code from and API specification.

There is an online version at https://app.swaggerhub.com/apis/flub78/todoList/1.0.0

The editor can also be downloaded from github and started by 
   npm start
   
The editor is available at

    http://127.0.0.1:3001/
    
    
