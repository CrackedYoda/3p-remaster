const express = require ('express');
const app =  express();
const port = 3000;



app.use(express.static('public'));
app.use( express.urlencoded({extended: true,}));
app.set('view engine', 'ejs');






let blog;



const blogs = [];
app.listen(port,()=> {
    console.log('server started');
});

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/newstory',(req,res)=>{   
    const _blogtitle = String(req.body.blogtitle);
    const _blogbody = String(req.body.blogbody);
blog = {
    bloghead: _blogtitle,
    blogbody: _blogbody
}

blogs.push(blog);
    res.redirect('3pstories');

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
    res.render('3pstories',{blog:blogs});
});