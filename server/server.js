const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();
// Middleware to parse the JSON
app.use(bodyParser.json());

// To host static files
app.use(express.static(__dirname +'/../public'));
app.get('/', (req, res) => {
    res.render('index.html');
});


app.listen(port, () => {
    console.log('applications is running on 3000');
});

