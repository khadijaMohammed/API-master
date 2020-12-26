const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const query = require('query');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());


app.post('/user', (req, res) => {
    console.log('body :', req.body);
    res.json({ name:req.body.name,message:"Hello To khadija " });
});

app.get('/user', (req, res) => {
    res.json({ message:"Hello To khadija " + req.query.name  });
});

app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

