My Blog App Requirements 
 
Goals
1.	Create a blog to be able to share stories and knowledge 

 User Stories

1.	As a viewer , I Want to see list of blog posts so that i can see the blog and topics for me to choose 
2.	As a viewer , I want to  view an individual blog post so that i can read all of its contents
3.	As a admin, I want to add a new blog post so that i can easily add content to blog

User Flow
            Diagram
Business Requirements 
●	     Pages
      Home Page 
      Individual Blog Post Page
      New Post Page
●	   Home Page 
                 Display use profile image
                 Display list of blogs with Title, Date Content 
                 Limit the blog text to a certain height
●	    Individual Blog Post Page  
                 Show The Cover image, title, content
                 Allow the user to go back to home page
●	    New  Post
      On Home page create one plus icon to add new post
1.	Create text box for title content
2.	Select cover image
3.	Store the added date

Technical requirements
●	   Front End using Javascript 
●	   Back End using NodeJS
                 Rest API
●	      Database
1.	JSON
API Endpoints
                1.  Get List  of Blog Posts 
                          “api/posts”
2.	Get Individual Blog
     “api/posts/:post_id”
3.	Post Blog Post
                           “api/posts”
