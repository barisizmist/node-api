const express = require('express');
const usersRouter = require('./routes/users.js');

const app = express();
const hostname = '127.0.0.1';
const port = 4000;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://barisizmist:<password>@node-rest-api.hmgwy2f.mongodb.net/?retryWrites=true&w=majority';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
