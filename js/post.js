/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
    getPostIdParam();
}

const getPostIdParam=()=>{
    const queryString=window.location.search;
    const urlParams=new URLSearchParams(queryString);
    return urlParams.get("id");
}
const getPost = () => {
    const postId=getPostIdParam();
    const url=`${API_URL}${postId}`;
    fetch(url).then(rawData=>{
        return rawData.json();
    }).then(jsonData=>{
        return buildPost(jsonData);
    })
}

const buildPost = (data) => {
  
    // HINT: Convert the date number to a Date string 
   const imgUrl=`${API_BASE_URL}${data.post_image}`;
   const curDate=new Date(parseInt(data.added_date)).toDateString();
   document.querySelector("header").style.backgroundImage=`url(${imgUrl})`;
   const postContent=`
   <div class="post-container">
                        <div id="individual-post-title">${data.title}</div>
                        <div id="individual-post-date">Publised on  ${curDate} </div>
                        <div id="individual-post-content">${data.content} </div>
                    </div>
   `    
   document.querySelector('.post-display').innerHTML=postContent;
}

