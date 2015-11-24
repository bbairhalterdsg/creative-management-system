var redis = require('redis');
var cli = redis.createClient();

redis.mod = function(){

  var obj = {};

  obj.client = cli;

  obj.getId = function(id){
    if(!id || id == 'undefined'){
      // GENERATE A NEW UNIQUE ID
      var str = '';
      var charbank = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      for (var i = 0;i <= 16; i++) {
      	var ind = Math.floor(Math.random() * (charbank.length-1)) + 1;
          str += charbank[ind];
      }
      return str;
    } else {
      // RETURN THE SELECTED ID
      return id;
    }
  };

  return obj;

}();

module.exports = redis;
