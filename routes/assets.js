var express = require('express');
var router = express.Router();
var redis = require('../cust_modules/redis');

router.param('assetid', function (req, res, next, assetid) {
  req.assetid = redis.mod.client.getId(assetid);
  next();
})

/* GET asset index */
router.get('/', function(req, res, next) {
  var uniqueid = req.assetid;
  res.render('assets', { title: 'Assets' });
});

/* GET/POST asset form */
router.route('/:assetid')
  .get(function(req, res, next) {
    var uniqueid = req.assetid;
    res.render('assets', {
      title: 'Asset:' + uniqueid,
      _id: uniqueid
    });
  })
  .post(function(req, res, next) {
    var uniqueid = req.assetid;
    var assetObj = {};
    res.send('posted');
    res.redirect('/');
  })


module.exports = router;
