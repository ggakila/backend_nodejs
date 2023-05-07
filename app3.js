const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname));

app.get('/2', (req, res) => {
    res.sendFile(__dirname + '/index2.html');
});

app.listen(port, function () {
    return console.log('listening on port ' + port);
})