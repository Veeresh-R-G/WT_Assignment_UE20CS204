const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 8081 || process.env.PORT


app.get('/', (req, res) => {
    console.log("GET REQUEST recevied at '/' ROUTE");
    res.send("GET request recieved ! !");
})

app.post('/post', (req, res) => {
    console.log("POST REQUEST RECEIVED at route '/' ")
    /*
    
        HERE YOU CAN Modify the code here to handle the data
        received from front-end UI


    */
    res.send("POST REQUEST RECEIVED ! ! ");
})
app.listen(PORT, () => {
    console.log(`Server Successfully started at ${PORT}`);
})