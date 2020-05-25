var express = require('express');
var router = express.Router();
const Converter = require('../public/javascripts/converter');
const request = require('request');
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
    .get('/courses', function(req, res, next) {
      getCourses().then((body) => {
        data = JSON.parse(body);
        baseCurrencyUs = parseFloat(data[2].buy);
        baseCurrencyRu = parseFloat(data[1].buy);
        baseCurrencyEu = parseFloat(data[0].buy);
        let conv = new Converter(baseCurrencyUs, baseCurrencyRu, baseCurrencyEu);
        res.render('courses', { title: 'Express',
                                title1: conv.convertUsToUa(1000),
                                title2: conv.convertUaToUs(1000),
                                title3: conv.convertRuToUa(1000),
                                title4: conv.convertUaToRu(1000),
                                title5: conv.convertEuToUa(1000),
                                title6: conv.convertUaToEu(1000)
                              });
        console.log(conv.convertUsToUa(1000));
        console.log(conv.convertUaToUs(1000));
        console.log(conv.convertRuToUa(1000));
        console.log(conv.convertUaToRu(1000));
        console.log(conv.convertEuToUa(1000));
        console.log(conv.convertUaToEu(1000));    
      })
    })

module.exports = router;

function getCourses() {
  return new Promise(function (resolve, reject) {
      request(url, function (err, res, body) {
          resolve(body);
      })
  })
}

