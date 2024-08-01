const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  //res.send('Hello, Express');
  //res.render('index',{title: '호랑이'});
  res.render('a/abc');
});

module.exports = router;
