const express = require ('express');
const app =  express();
const port = 3000;




app.use( express.urlencoded({extended: true,}));
app.set('view engine', 'ejs');




const blogs = [];
app.listen(port,()=> {
    console.log('server started');
});

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/newstory',(req,res)=>{   
    const blogtitle = String(req.body.blogtitle);
    const blogbody = String(req.body.blogbody);

})

app.get('/copeblog',(req,res)=>{
    res.render('copeblog');
});
app.get('/discord',(req,res)=>{
    res.render('discord');
});
app.get('/newstory',(req,res)=>{
    res.render('newstory');
});
app.get('/3pstories',(req,res)=>{
    res.render('3pstories');
});