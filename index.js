const port = 4980;

const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


let db_M= require('./database');
global.db_pool = db_M.pool;

const courses_R =require('./routers/courses_R');
app.use('/C/', courses_R);

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});
