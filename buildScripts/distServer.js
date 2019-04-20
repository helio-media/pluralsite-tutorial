/* eslint-disable no-console*/
import express from 'express';
import path from 'path';
import open from 'open';



//this is just to test prod on local machine,
//this file will not be used in production


const port = 3000;
const app = express();
app.use(express.static('dist'));


app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
   res.json([
      {"id": 1, "firstName":"Cian", "lastName":"Moynihan", "email":"cian@heliomedia.com.au" },
      {"id": 2, "firstName":"Pete", "lastName":"Hall", "email":"peter@heliomedia.com.au" },
      {"id": 3, "firstName":"Laura", "lastName":"Hall", "email":"laura@heliomedia.com.au" },
   ]);
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
