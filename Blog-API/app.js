const express=require('express');
const Post=require('./api/models/posts');
const app=express();
var multer  = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${getExt(file.mimetype)}`)
    }
  })
  const getExt=(mimetype)=>{
      switch(mimetype){
          case "image/png":
              return ".png";

         case "image/jpeg":
              return ".jpeg";
      }
  }
  var upload = multer({ storage: storage })
const postData=new Post();


app.use(express.json());
app.use((req, res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
})
app.use('/uploads',express.static('uploads'));  
app.get('/api/posts',(req, res)=>{
     
     res.status(200).send(postData.get());
})

app.get('/api/posts/:post_id',(req, res)=>{
    const post_id=req.params.post_id;
    let FoundPost=postData.getIndividualBlog(post_id);
    if(FoundPost)
    {
        res.status(200).send(FoundPost);
    }
    else{
        res.status(404).send("Not Found");
    }
    
})


///posting images to file

app.post('/api/posts',upload.single("post_image"),(req, res)=>{
    //console.log(req.file.path.replace('\\','/'))
    const newPost={
        "id":`${Date.now()}`,
        "title":req.body.title,
        "content":req.body.content,
        "post_image":req.file.path.replace('\\','/'),
        "added_date":`${Date.now()}`
    }
    postData.add(newPost);
    res.status(201).send("uploaded");
})

app.listen(3000,()=>console.log("listening http://localhost:3000"))