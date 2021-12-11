const express = require('express');
const mongoDb = require('mongodb').MongoClient;
const CONN = "mongodb://localhost:27017";
const PORT = 8081;
const query = { "model_no": 500 };
const filter = { "model_no": 500 };

const data =
    [
        {
            "model_no": 200,
            "model_name": "SBC",
            "model_price": 20000,
            "model_competc": 2
        },
        {
            "model_no": 100,
            "model_name": "SIK",
            "model_price": 30000,
            "model_competc": 3
        },
        {
            "model_no": 300,
            "model_name": "REF",
            "model_price": 10000,
            "model_competc": 1
        },
        {
            "model_no": 400,
            "model_name": "AWW",
            "model_price": 80000,
            "model_competc": 4
        },
        {
            "model_no": 600,
            "model_name": "KUL",
            "model_price": 60000,
            "model_competc": 8
        },
    ]

const app = express();

app.get('/', (req, res) => {
    console.log("GET REQUETS RECEIVED ! ");
    mongoDb.connect(CONN, (err, dbs) => {
        if (err) {
            console.log("Error is : " + err);
        }
        else {
            console.log(`Extracting info based on Model_Name = ${query.model_no}`);
            let dataBase = dbs.db('assignDB');
            dataBase.collection('watch').find(query).toArray((err, docs) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(docs);
                    res.json(docs);
                }
            })
        }
    })

})

app.post('/newDoc', (req, res) => {
    console.log("Received a POST Request ! ! ! ! ");
    console.log("Inserting New documents Now ! ! ");
    mongoDb.connect(CONN, (err, databases) => {
        let myDb = databases.db('assignDB');
        myDb.collection('watch').insertMany(data, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Documents Inserted Successfully ! ! ! ! ");
                res.send("Success")
            }
        })
    })

})


app.put('/updateDoc', (req, res) => {
    console.log("PUT REQUEST RECEIVED ! ! ! ");
    mongoDb.connect(CONN, (err, databases) => {
        if (err) {
            console.log(err);
        }
        else {
            let myDb = databases.db('assignDB');
            myDb.collection('watch').updateOne(filter,
                {
                    $set:
                    {
                        "model_price": 1000000
                    }
                },
                {
                    upsert: true
                })

            console.log("Changed Successfully ! !");
            res.send("Changed Successfully Using the PUT REQUEST !!");
        }
    })
})
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
