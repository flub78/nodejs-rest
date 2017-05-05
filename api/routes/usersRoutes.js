'use strict';
module.exports = function(app) {
  var userCtrlr = require('../controllers/usersController');

  // userCtrlr Routes
  app.route('/users')
    .get(userCtrlr.list_all_users)
    .post(userCtrlr.create_a_user);

  app.route('/users/:userId')
    .get(userCtrlr.read_a_user)
    .put(userCtrlr.update_a_user)
    .delete(userCtrlr.delete_a_user);
};
