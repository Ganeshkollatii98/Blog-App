/**
 * TODO: Finish submitNewPost function to submit form data to the API 
 */

const API_URL = "http://localhost:3000/api/posts";

const submitNewPost = () => {
    // HINT: Use FormData to store data to send over
    // HINT: Redirect the user to home page after successful submission
    const title=document.querySelector("#form-post-title").value;
    const content=document.querySelector("#form-post-content").value;
    const inputImg=document.querySelector("#image-post")

    let data=new FormData();

    data.append("post_image",inputImg.files[0]);
    data.append("title",title);
    data.append("content",content);

    fetch(API_URL, {
        method: 'POST',
        body: data
    }).then(()=>{
        setTimeout(()=>{
            window.location.href = "index.html";
        },1000)
        
    })


}