const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello, Testing 3!");
 });

 //db.collection('Sales')
