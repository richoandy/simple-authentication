var express = require('express');
var router = express.Router();
const ctUser = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', function(req, res) {
  res.send("berhasil connect")
})

router.get('/testing', function(req, res){
  res.send("ini testing berhasil hit server")
})

router.post('/signup', ctUser.signUp)
router.post('/signin', ctUser.signIn)

module.exports = router;
