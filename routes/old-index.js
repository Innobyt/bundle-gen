var express = require('express');
var router = express.Router();
var randomstring = require('just.randomstring');
var rs = require('random-strings');

/* GET home page. */
router.get('/', function(req, res) {

function randString(x){
    var m = "MERCHANT" + "-";
    var c = rs.human(20);
    var sym = c.replace(/(.{5})/g,"$1-");
    var trim = sym.slice(0,-1);
    var res = m + trim;
    return res;
}

function generate(num) {
    var dis = "";
    for (var i = 0; i < num; i++)
    {
        dis += randString(20) + "\n";
    }
    return dis;
}

var redeemcode = generate(100);

  res.render('index', { title: 'Express', result: redeemcode });
});

module.exports = router;
