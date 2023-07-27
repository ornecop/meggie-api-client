const express = require("express");
const User = require("../schema/user");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

router.post('/', (req, res) => {
  const {username, name, password} = req.body;

  if(!!!username || !!!name || !!!password) {
    return res.status(400).json(jsonRespose(400, {
      error: 'Fields are require',
    }));
  }
  // crear usuario en la base de datos
  const user = new User({username, name, password});

  // user.save();

  res
  .status(200)
  .json(jsonRespose(200, {
    message: 'User created successfully',
  }));

  res.send('signout');
});

module.exports = router;
