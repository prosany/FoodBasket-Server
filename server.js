const express = require('express')
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Define Port Number
const port = process.env.PORT || 8080;

// Use Cors and bodyParser
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hgubw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log(`${!!err ? 'Database Connection Failed' : 'Database Connection Successful'}`);
    const productsCollection = client.db("FoodBasket").collection("products");
    const ordersCollection = client.db("FoodBasket").collection("orders");
});


app.listen(port, () => {
    console.log(`App Listening at http://localhost:${port}`)
})