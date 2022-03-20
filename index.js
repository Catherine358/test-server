const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', (err, data) => {
        console.log(data)
        res.setHeader('Content-Type', 'application/json');
        res.sendStatus(200).end(data);
    })
});

const server = app.listen(process.env.PORT || 3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(host, port)
})
