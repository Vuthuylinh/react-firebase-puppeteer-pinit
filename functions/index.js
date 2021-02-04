const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();


//TEST POSTMAN
exports.helloWorld = functions.https.onRequest((request, response) => {
     response.send("Hello from Firebase!");
});


const app = express();
app.use(cors({ origin: true }));
app.post('/', async (req, res) => {
  const newArticle = req.body;

  await db.collection('articles').add( newArticle)
  res.status(201).send();
});


 exports.api = functions.https.onRequest(app);

