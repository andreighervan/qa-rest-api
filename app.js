'use strict';
var express=require('express');
var mongoose=require('mongoose');
var routes=require('./routes');

//connect to mongodb
var options = {
    useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
};

mongoose.connect('mongodb://localhost:27017/qa',options);

var jsonParser=require('body-parser').json;

var app=express();
var port=process.env.PORT||3000;

app.listen(port,function(){
   console.log('Express server is listening on port',port);
});
app.use(jsonParser());

app.use('/questions',routes);

