var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', async function(req, res) {

  await models.User.create({
    username: req.body.username
  })
  
  res.redirect('/');
});

router.get('/:user_id/destroy', async function(req, res) {

  await models.User.destroy({
    where: {
      id: req.params.user_id
    }
  })
  
  res.redirect('/');
  
});

router.post('/:user_id/tasks/create', async function (req, res) {

  await models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id
  })

  res.redirect('/');
});


router.get('/:user_id/tasks/:task_id/destroy', async function (req, res) {
  
  await models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  })

  res.redirect('/');
  
});



module.exports = router;
