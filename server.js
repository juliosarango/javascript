var express = require('express')
var app = express();

app.set('view engine','pug');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('index');
})

app.listen(3000,function(err){
    if (err)
       return console.log('hubo un error',process.exit(1));
    console.log('platzigram escuchando')   ;
})