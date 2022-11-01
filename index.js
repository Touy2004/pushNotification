const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');



const app = express();

// set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = "BJ7Hew25CycWYDrPT640SDh8-qu4WGK-L6WiqeWwiWYHNhSyvXm2qGusHT0NXRM-RPBihAL6CspiisZnnczbnIk"
const privateVapidKey = "_7QY_4qPg-SaWOfrasZu3ajlB3API4HJJahL8X2fugI"

webpush.setVapidDetails(
    "mailto:test@test.com",
    publicVapidKey,
    privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;

    // Send 201 - resource created
    res.status(201).json({});

    // Create payload
    const payload = JSON.stringify({ title: "jark khn t br huk jao" });

    // Pass object into sendNotification
    webpush
        .sendNotification(subscription, payload)
        .catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`connected port ${port}`));