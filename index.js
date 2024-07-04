import express from "express";
import bodyParser from "body-parser"; //This is needed to add a body tag to the req 
var posts = []; // store the post objects

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // This will add a body to req 
app.use(express.static("public")); // This is very important you need to use this when you want to use include css
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    res.render("index.ejs",{ posts: posts }); 
}); 


app.post("/submit",(req,res)=>{ // You need to make sure that there is a (/) backslash before submit
    
    //Creat a post object 
    const post = {
        postTitle: req.body.postTitle,
        postContent: req.body.postContent,
    }
    posts.push(post);
    

    res.render("index",{   //Before you had the index.ejs, you dont need .ejs, it is automatically implied 
        posts:posts   
    });
    console.log(post);
    
});


app.listen(port,()=>{
    console.log(`listening at localhost:${port}`);
});

// Next Task include the partials, so that when the user clicks on a post, they get directed to the posts page
//After that create the feature that will allow a user to edit, and delete their posts