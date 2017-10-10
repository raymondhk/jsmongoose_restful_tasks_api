const tasks = require('../controllers/tasks.js')
module.exports = function(app) {
  
    // todoList Routes
    app.route('/tasks')
      .get(tasks.list)
      .post(tasks.create);
  
  
    app.route('/tasks/:id')
      .get(tasks.info)
      .put(tasks.update)
      .delete(tasks.delete);
  };