var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  User = require('./api/models/usersModel'),
  bodyParser = require('body-parser');

// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// The module todoListRoutes returns a function
var routes = require('./api/routes/todoListRoutes');
// which is called there to add the routes for the todoList REST
routes(app);
routes = require('./api/routes/usersRoutes');
routes(app);

app.use(function(req, res) {
	  res.status(404).send({url: req.originalUrl + ' not found (not supported by the REST API)'})
	});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
