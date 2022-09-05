var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

const User = require('../models/user')

router.get('/test', async function (req, res, next) {
  console.log("entered user route !!!")
  const newUser = new User({
    user_name: "John Doe",
    password: "password"
  })

  try {
    await newUser.save()
    res.send(newUser);
  } catch (error) {
    console.error(error)
  }
});

router.post('/register', async function (req, res, next) {
  console.log(req.body)
  try {
    const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

    const existingUser = await User.find({ user_name: req.body.user_name })

    if (existingUser.length > 0) {
      res.status(500).send("User already exists.")
    }

    const newUser = new User({
      user_name: req.body.user_name,
      password: hash
    })

    await newUser.save()
    res.send("User succesfully created.")
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
});

router.post('/login', async function (req, res, next) {
  try {
    const user = await User.findOne({ user_name: req.body.user_name })
    if (user && bcrypt.compareSync(req.body.password, user.password)) { // compare passwords
      const auth_token = jsonwebtoken.sign({ user: user._id }, 'secret', { expiresIn: 36000 })
      res.send({ auth_token })
    } else {
      res.status(500).send('Invalid credentials. Try again.')
    }
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
});

module.exports = router;
