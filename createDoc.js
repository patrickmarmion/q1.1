// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

// Initialize express and define a port
const app = express()
const PORT = 5000

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())

app.get('/', function(req, res, next) {
    res.send("Hello world");
});

app.use(bodyParser.json())
app.post("/hook", (req, res) => {
    console.log('received webhook', req.body) // Call your action on the request here
    res.status(200).end() // Responding is important
})

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))


const request = require('request-promise');
require('dotenv').config(); 
/*
(async function () {
    try {
        const api_key = process.env.API_KEY;
        // get pandadoc document details
        const deal = await request({
            method: 'POST',
            url: 'https://api.pandadoc.com/public/v1/documents',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `API-Key ${api_key}`
            },
            body : JSON.stringify (
                {
                    "name": "Training Contract",
                    "template_uuid": "eJuhzhK3NAGEhXhMyDHT4P",
                    "recipients": [
                        {
                            "email": "patrick.marmion@pandadoc.com",
                            "first_name": "Patrice",
                            "last_name": "Marmion",
                            "role": "Client"
                        }
                    ]
                }
            )
        });
        console.log(deal);
    } catch (e) {
        console.log('Our error', e);
    }
})();
*/
