const router = require("express").Router();
const User = require("../schema/user");
const { jsonRespose } = require("../lib/jsonResponse");

router.post('/', async (req, res) => {
  const {username, password} = req.body;

  if(!!!username || !!!password) {
    return res.status(400).json(jsonRespose(400, {
      error: 'Fields are require',
    }));
  }

  const user = await User.findOne({ username })

  if(user){
    const correctPassword = await user.comparePassword(password, user.password);

    if(correctPassword){
          // autenticar usuario
      const accessToken = user.createAccessToken();
      const refreshToken = user.createRefreshToken();
      res.status(200).json(jsonRespose(200, {
        user, accessToken, refreshToken 
      }));
    }else{
      res.status(400).json(
        jsonRespose(400, {
          error: "User or password incorrect",
        })
      )
    }
  }else {
    res.status(400).json(
      jsonRespose(400, {
        error: "User not found"
      })
    )
  }
});

module.exports = router;
