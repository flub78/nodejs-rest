'use strict';
module.exports = function(app) {
  var ctrlr = require('../controllers/usersController');

  // ctrlr Routes
  app.route('/users')
    .get(ctrlr.list_all)
    .post(ctrlr.create);

  app.route('/users/:userId')
    .get(ctrlr.read)
    .put(ctrlr.update)
    .delete(ctrlr.delete);
};
