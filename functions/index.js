const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();
const app = express();
app.use(cors({ origin: true }));

//TEST POSTMAN
exports.helloWorld = functions.https.onRequest((request, response) => {
     response.send("Hello from Firebase!");
});

app.get("/",async(req,res)=>{
  const snapshot = await db.collection("articles").get()
  let articles =[];
  snapshot.forEach(doc=>{
    let id= doc.id
    let data = doc.data()
    articles.push({id, ...data})
    res.status(200).send(JSON.stringify(articles))
  })
})

app.post('/', async (req, res) => {
  const newArticle = req.body;

  await db.collection('articles').add( newArticle)
  res.status(201).send();
});


 exports.api = functions.https.onRequest(app);

