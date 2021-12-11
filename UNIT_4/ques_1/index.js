const express = require('express');
const mongoDb = require('mongodb').MongoClient;
const app = express();
const CONN = "mongodb://localhost:27017";
const data =
    [
        {
            model_no: 100,
            model_name: "Watch - 1",
            model_price: 30000,
            model_competc: "XYZ"
        },
        {
            model_no: 200,
            model_name: "Watch - 2",
            model_price: 40000,
            model_competc: "ABC"
        },
        {
            model_no: 300,
            model_name: "Watch - 3",
            model_price: 50000,
            model_competc: "DFS"
        },
        {
            model_no: 400,
            model_name: "Watch - 4",
            model_price: 100000,
            model_competc: "BFS"
        },
    ]

app.get('/', (req, res) => {
    console.log('Got a GET REQUEST \n');
    mongoDb.connect(CONN, (err, dbs) => {
        if (err) {
            console.log(err);
        }
        else {
            const db = dbs.db('assignDB')
            db.collection('watch').find({}).toArray((err, docs) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("The Documents present are : ");
                    console.log(docs);
                }
            })
            console.log("Success Connection");
        }
    })
    res.send("h1");
    res.end();
})

app.post('/viewDB', (req, res) => {
    console.log("Got a Post request \n");
    mongoDb.connect(CONN, (err, dbs) => {
        if (err)
            console.log(err);
        else {
            const myDB = dbs.db('assignDB');
            myDB.collection('watch').insertMany(data, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("All Documents Inserted in the Database SuccessFully ! ! !");
                }
            })
        }
    })
    res.json({ message: "Successfully Inserted All documents" });
})


app.listen(8081, () => {
    console.log("Server Started at PORT 8081");
})
