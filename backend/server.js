const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const cors = require('cors')
const { MongoClient } = require('mongodb');

dotenv.config()


// Connecting to the MongoDB Client
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
client.connect(); 


const dbName = 'chingu';
const PORT = 3000;
const app = express()

app.use(bodyparser.json())
app.use(cors())


app.get('/',async(req,res)=>{
     const db = client.db(dbName);
     const collection =db.collection("tulsi")
     const findResult = await collection.find({}).toArray();
   res.json(findResult)

})


app.post('/',async(req,res)=>{
 const {url,shorturl} = req.body;
   const db = client.db(dbName);
     const collection =db.collection("tulsi")
      const findResult = await collection.insertOne({url,shorturl});
    res.send({success: true, result: findResult})

})




app.listen(PORT,()=>{
    console.log("server running")
})
