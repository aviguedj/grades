const express = require('express');
const router = express.Router();
module.exports = router;


let  Courses=[];
router.post('/Courses',(req,res)=>{
    let course_name=req.body.course_name;
    Courses.push({name:course_name});
    res.status(200).json("ok");

});
router.put('/Courses',(req,res)=>{
    let idx = req.body.idx ;
    let course_name=req.body.course_name;
    courses[idx]={name:course_name};
    res.status(200).json("ok");
});
router.delete('/Courses',(req,res)=>{
    let idx = req.body.idx ;
    courses.splice(idx, 1);
    res.status(200).json("ok");

});
router.get('/Courses', (req, res) => {
    res.status(200).json(Courses);
});
