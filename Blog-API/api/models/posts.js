 
const Path = './data.json'
const fs = require('fs');
 class post{

    get=()=>{
        return this.readData();
    }


    getIndividualBlog=(PostId)=>{
       let listPosts=this.readData();
       let foundPost=listPosts.find((post)=>post.id==PostId);
       return foundPost;
    }

    add=(PassedNewData)=>{
        let CurrentPost=this.readData();
        CurrentPost.unshift(PassedNewData);
        this.storeData(CurrentPost);
    }

    readData=()=>{
        let rawdata=fs.readFileSync(Path);
        let posts=JSON.parse(rawdata);
        return posts;
    }
    storeData=(NewData)=>{
        let data=JSON.stringify(NewData);
        fs.writeFileSync(Path, data);
    }
 }
 module.exports=post;