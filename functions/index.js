const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });  Request function to run via http request with exports object


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello, Testing 1,2,3!");
 });
