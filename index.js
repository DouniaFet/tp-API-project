
const express = require("express");
const mongoose = require("mongoose");
const app = express();
// ki nhb njib haja mn file okher lazm ndiro require
const Article = require("./models/Article") //article wlat tmathel wassit mawjod f javascipt

// Connect to MongoDB database
mongoose.connect("mongodb+srv://douniadoudou979:eb4sGViYQT8CWtDh@firstapi.odavex8.mongodb.net/?retryWrites=true&w=majority&appName=firstAPI", {
  //useNewUrlParser: true,
  //useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);

});
//mongodb+srv://douniadoudou979:eb4sGViYQT8CWtDh@firstapi.odavex8.mongodb.net/?retryWrites=true&w=majority&appName=firstAPI
//douniadoudou979
//eb4sGViYQT8CWtDh
//mongodb+srv://<username>:<password>@cluster0.hkctdrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


app.use(express.json());
app.get("/hello",(req, res)=>{
   res.send("hello");

});
//idha jat request 3la address ta3i ana (server)  t7didn f port 3000 f path /hello traj3 response ismo hello
// adress server_path _port_type request
app.listen(3000, () => {
    console.log("i am listening in port 3000");
});

app.get("/",(req, res)=>{
    res.send("hello in node js ");
 
 });

 app.get("/numbers",(req, res)=>{
    let numbers ="";
    for(let i=0;i<= 100;i++){
        numbers +=i +"-";
    }
    //res.send("hello in node js ");
 //res.sendFile(__dirname +"/views/number.html");//ydina l masar ta3 file html hadi ki nhbo naffichiw page html
 //render troh l folder li ismo views
 res.render("number.ejs" ,{
    name:"dounia",
    number: numbers,
 })//lazm folder ykon ismo views
 }); 


 app.put("/test",(req, res)=>{
    res.send("hello world ");
 
 });

 app.get("/sayhello", (req, res) => {
    console.log(req.query); // Log the query parameters
    
    // Access name and age from query string
    const name = req.body.name;
    const age = req.query.age;

    // Send a response with interpolated values
    res.send(`Hello ${name}, Age is: ${age}`);
});
//=================ARTICLES ENDPOINT=================
// ki ndir articles nrmlm y3amrli article (title-body-number)
app.post("/articles",async(req,res)=>{
   const newArticle = new Article()

   const artTitle =req.body.articleTitle;
   const artBody = req.body.articleBody;

   
//bah myb9awch yokhrjo nfs title w body 
   newArticle.title= artTitle ;
   newArticle.body = artBody ;
   newArticle.numberOfLikes =0;
    await newArticle.save();//derna async w await bah nstanaw hatan ydir save sa3 khtrah tawel bah tconicta m3a BD
    //kon mandiroch async w await yroh direct yafficher send: articles 
    
   res.json(newArticle);
});

app.get("/articles",async(req,res)=>{
const articles = await Article.find()
console.log(" the articles are ",articles);
res.json(articles);

});
//njibo article sepicifie
app.get("/articles/:articleId",async(req,res)=>{
   const id= req.params.articleId;//njibo params
   try{
 const article =  await Article.findById(id)
    res.json(article);
   return;
   }  catch(error){
      console.log("error while reading article of id ",id);
      return res.send("error");
   }
   });


   app.delete("/articles/:articleId",async (req, res)=>{
      const id= req.params.articleId;//njibo params
   try{//njibo id
 const article =  await Article.findByIdAndDelete(id);
    res.json(article);
   return;
   }  catch(error){
      console.log("error while reading article of id ",id);
      return res.send("error");
   }
   
   });
   
// rah njibo article kaml w nrsloha l file html
   app.get("/showArticles",async(req,res)=>{
      const articles =  await Article.find()
     res.render("articles.ejs",{
      allArticles: articles,
   

     });
      
      });


 app.get("/findsummation/:number1/:number2",(req, res)=>{//idha lgit ay haja
    res.send("find sum ");
 console.log(req.params);
 });
 app.delete("/testingdelete",(req, res)=>{
    res.send("vesiting delete request ");
 
 });
 