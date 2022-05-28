const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const users = [
  {
    id : 1,
    email: 'ruri@gmail.com',
    name : 'Ruri',
    status : 'active'
  },
  {
    id : 2,
    email: 'ruri2@gmail.com',
    name : 'Ruri2',
    status : 'active'
  },
  {
    id : 3,
    email: 'ruri3@gmail.com',
    name : 'Ruri3',
    status : 'active'
  },
];

const is_user_exists = id => users.some(user => user.id === parseInt(id));

/* GET all users . */
router.get('/', function(req, res, next) {
  res.json(users);
  // res.send('respond with a resource');
});

// get single user by id
router.get('/:id', (req, res) => {
  if(!is_user_exists(req.params.id)){
    return res.status(400).json({ msg : `No user with id ${req.params.id}`});
  }

  res.json(users.find(user => user.id === parseInt(req.params.id)));
});

// create user
router.post('/', (req, res) => {
  if(!req.body.name || !req.body.email){
    return res.status(400).json('Please include name and email');
  }

  const newUser = {
    id : uuid.v4(),
    name : req.body.name,
    email: req.body.email,
    status: 'active'
  };

  users.push(newUser);
  res.json({msg:'User added'});
});

// update user
router.put('/:id', (req, res) => {
  if(!is_user_exists(req.params.id)){
    return res.status(400).json({ msg : `No user with id ${req.params.id}`});
  }

  // find data (variable user still refer to data in users)
  const user = users.find(user => user.id === parseInt(req.params.id));
  const updUser = req.body;

  user.name = updUser.name ? updUser.name : user.name;
  user.email = updUser.email ? updUser.email : user.email;

  res.json({msg:'User updated'});
});

// delete user
router.delete('/:id', (req, res) => {
  if(!is_user_exists(req.params.id)){
    return res.status(400).json({ msg : `No user with id ${req.params.id}`});
  }

  const userIndex = users.findIndex(user => user.id === parseInt(req.params.id));
  users.splice(userIndex, 1);

  res.json({msg:'User deleted'});
});

module.exports = router;
