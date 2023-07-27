const express = require("express");
const User = require("../schema/user");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

router.post('/', async (req, res) => {
  const {username, name, password} = req.body;

  if(!!!username || !!!name || !!!password) {
    return res.status(400).json(jsonRespose(400, {
      error: 'Fields are require',
    }));
  }
  // crear usuario en la base de datos
  try {
    const user = new User();
    const exist = await user.usernameExist(username);
  
    if(exist) {
      return res.status(400).json(
        jsonRespose(400, {
        error: 'Username already exist',
      })
      );
    } 
  
    const newUser = new User ({ username, name, password })
  
    newUser.save();
  
    res
    .status(200)
    .json(jsonRespose(200, {
      message: 'User created successfully',
    }));
  
    res.send('signout');
  } catch (error) {
    res.status(500).json(
      jsonResponse(500, {
        error: "Error creating user",
      })
    )
  }

});

module.exports = router;
