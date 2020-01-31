const sub = document.getElementById('submit');
// const express = require('express');
const mailgun = mailgunjs();
sub.addEventListener('click', email);
function email() {



  var apikey = "b9ebedf25f468382805b136b3e38688e-9c988ee3-4ed71f7d"
  const DOMAIN = 'sandboxb1da9aa1a7204409b12d099526a495ca.mailgun.org';
  const mg = mailgun({apiKey: apikey, domain: DOMAIN});
  const data = {
  	from: 'satyam <satyam.mj7@gmail.com>',
  	to: 'satyamrajput799@gmail.com',
  	subject: 'Hello',
  	text: 'Testing some Mailgun awesomness!'
  };
  mg.messages().send(data, function (error, body) {

    if(error){
      console.log("error found" + error);
    }
  	console.log(body);
  });


}
