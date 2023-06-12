const express = require('express'); //import express that we installed with npm 
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res)=> {
    res.send("hello, world");
});

app.get('/posts', (req, res) => {
    res.send({
        name: 'eloise',
        surname: 'cunningham',
        age: 21,
        title: 'Software Engineering',
        body: "here is the body of the post",
    });

});

app.listen(port, () => {
    console.log("listening on port 3000")
});