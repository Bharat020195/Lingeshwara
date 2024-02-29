const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const {MongoClient} = require('mongodb');


app.use(express.json());
app.use(cors());

const url = 'mongodb+srv://tillu0201:Tillu0201@bharat.e7hqicd.mongodb.net/';
const client = new MongoClient(url);


async function run() {

  try {

    await client.connect()

        const db = client.db('Lingeshwara');
        const collection = db.collection('Hall');
        

    app.get('/', (req, res) => {
      res.send("Backend server")
    })
    
    app.get('/hall',async (req, res) =>{

      try {
        
        const data = await collection.find({}).toArray()

        res.json(data);
        
      } catch (error) {
        console.error('Unable to fetch data', error);
        res.status(202).send('Unable to fetch data from Mongodb');
      }
    } )

     
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    
    
  } catch (error) {
    console.error('Unable to connect to database', error);
    res.status(201).send('Unable to connect to Mongodb');
  }
}

run();