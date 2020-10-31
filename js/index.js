

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL,()=>{
        method:'GET'
    }).then(rawData => {
        return rawData.json();
    }).then(jsonData => {
        buildPosts(jsonData);
    })
}

const buildPosts = (blogPosts) => {
    let blogPostsContent="";
    for(blogpost of blogPosts) {
        const curdate=new Date(parseInt(blogpost.added_date)).toDateString();
        const postimage=`${API_BASE_URL}${blogpost.post_image}`;
        const posthtml=`post.html?id=${blogpost.id}`
        blogPostsContent+=`
        <a class="post-link" href="${posthtml}">
        <div class="post">
            <div class="post-img" style="background-image:url(${postimage})">
                
            </div>
            <div class="post-content">
                    <div class="post-date">
                        ${curdate}
                    </div>
                    <div class="post-title">
                        <h4>${blogpost.title}</h4>
                    </div>
                    <div class="post-text">
                    ${blogpost.content}    
                    </div>
            </div>    
        </div>
 
        `
        document.querySelector('.blog-post').innerHTML=blogPostsContent;
    }
} 