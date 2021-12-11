const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const PORT = 8081;


//Initialising the App
const app = express();

//Configuring the App
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload());


//Defining actions to be taken when Various Routes are hit
app.get('/', (req, res) => {
    console.log("GET REQUEST RECEIVED ! ! ");
    res.sendFile(__dirname + '/' + "index.html");
})

app.post('/', (req, res) => {
    console.log("POSTED ON '/' ROUTE");
    if (req.files) {
        console.log(req.files);
    }

    let fileObject = req.files.image;
    let fileName = fileObject.name;
    let fileSize = fileObject.size;

    //Now we have the file we may need to take that file and store it somewhere else
    fileObject.mv('./saveFiles/' + fileName, (err) => {
        if (err) {
            console.log("Error : " + err);
        }
        else {
            res.send("FileName : " + fileName + " Uploaded Successfully to ./saveFiles/ Directory\n")
        }
    })

})
app.listen(8081, () => {
    console.log(`Server Started At PORT = ${PORT}`);
})
