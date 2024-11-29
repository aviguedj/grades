const port = 4980;

const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let  Courses=[];

app.post('/Courses',(req,res)=>{
    let course_name=req.body.course_name;
    Courses.push({name:course_name});
    res.status(200).json("ok");

});

app.put('/Courses',(req,res)=>{
let idx = req.body.idx ;
let course_name=req.body.course_name;
courses[idx]={name:course_name};
    res.status(200).json("ok");
});

app.delete('/Courses',(req,res)=>{
    let idx = req.body.idx ;
    courses.splice(idx, 1);
    res.status(200).json("ok");

});
app.get('/CourseList', (req, res) => {
    res.status(200).json(Courses);
});


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});
