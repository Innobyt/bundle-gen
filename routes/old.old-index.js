var express = require('express');
var router = express.Router();
var randomstring = require('just.randomstring');
var pathUtils = require('path');
var lgen = require('license-key');

/* GET home page. */
router.get('/', function(req, res) {
var number = 1;
var redeemcode = randomstring.array(number, 20, 'numbers_uppercases'); // returns array of 100 random strings with 20 character length types of alphanumeric
var rs = "";

var name = "Nikolay Tsenkov",
    email = "some@email.com",
    licenseMeta = "Quantity: 1",
    appMeta = "appVersion: 1",
    signThis = [ name, email, licenseMeta, appMeta ].join( " | " ),
    template = [
        "====BEGIN LICENSE====",
        "{{&name}}",
        "{{&email}}",
        "{{&licenseMeta}}",
        "{{&appMeta}}",
        "{{&serial}}",
        "=====END LICENSE====="
    ].join( "\n" );
lgen.generateLicense( {
    signThis: signThis,
    template: template,
    model: {
        name: name,
        email: email,
        licenseMeta: licenseMeta,
        appMeta: appMeta,
        serialFormat: function(redeemcode) {
            var colLength = 4,
                numOfColPerRow = 4,
                length = redeemcode.length,
                numberOfColumns = (length % colLength) === 0 ? length / colLength : Math.ceil( length / colLength ),
                regex = new RegExp( ".{1," + colLength + "}", "g" ),
                colData = serial.match( regex ),
                resultLines = [];
            while ( colData.length ) {
                var row = colData.splice( 0, numOfColPerRow );
                resultLines.push( row.join( "-" ) );
            }
            return resultLines.join( "\n" );
        }
    }
}, function(error, license) {
    // ...
} );

//var test = rs.join(" ");

//for (var rs2 in list) {
// rs = rs.concat(list[rs2]);
//}
//  res.render('index', { title: 'Express', result: rs2 });
  res.render('index', { title: 'Express', result: rs });
});

module.exports = router;

