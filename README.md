# Node-API-Posts
A simple Web API using **Node.js** and **Express** that uses **Express Middleware**.
________________
### Getting started
1. Add **package.json**
    - Install **express** and **nodemon**
    - Add start and server scripts to package.json
        ```
        "start": "node index.js",
        "server": "nodemon index.js"
        ```
2. Create **index.js** file
    - add code for server to listen
3. Create api folder with a **server.js** file and add code to:
    - create the server
    - require express *(should be at top of file)*
    - allow the server to use express.json()
4. Create a endpoint in server.js 
5. Export the server
6. Require the server in the index.js file
7. Run `npm run server` in terminal and navigate to the URL, to check and see if everything is working
____________________________

### Adding Posts Routes
*In*side the API folder the posts-router.js file will contain the routes. Inside the data folder the posts.js file holds the data**
1. Inside the **posts-router.js** file
    - require express and the posts data from the post.js file
    - create a express router variable
    - add routes
2.  Run `npm run server` in terminal and use a REST client like Insomnia or Postman to test routes
    

|   Method      |                 URL                     |        Function         |
| ------------- |:---------------------------------------:|:-----------------------:|
|     GET       |   http://localhost:5000                 | Gets the server message |
|     GET       |   http://localhost:5000/api/posts       | Gets All post           |
|     GET       |   http://localhost:5000/api/posts/id    | Gets post by id         |
|     POST      |   http://localhost:5000/api/posts       | Adds a new post         |
|     PUT       |   http://localhost:5000/api/posts/id    | Updates post            |
|     DELETE    |   http://localhost:5000/api/posts/id    | Deletes post            |