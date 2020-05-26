const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
let obj = {};
/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About us: '});
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Let your contacts!'});
});

router.post('/contacts', function (req, res) {  
  obj.name = req.body.name;
  obj.phone = req.body.phone;
  obj.email = req.body.email;

  let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'biryuk3333@gmail.com', 
        pass: 'repersmerti228'
    } 
  }); 
    
  let mailDetails = { 
      from: 'biryuk3333@gmail.com', 
      to: 'biryuk3333@gmail.com', 
      subject: 'Test mail contacts', 
      text: JSON.stringify(obj),
  }; 
    
  mailTransporter.sendMail(mailDetails, function(err, data) { 
      if(err) { 
          console.log('Error Occurs'); 
      } else { 
          console.log('Email sent successfully'); 
      } 
  }); 

  console.log(obj);
  res.redirect('/contacts');
});

router.get('/', function(req, res, next) {
  res.render('index', { title: '^Courses^' });
});

module.exports = router;