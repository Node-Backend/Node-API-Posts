const express = require('express');

const posts = require('../../data/posts.js');

const router = express.Router();


router.get('/', (req, res) => {
      res.status(200).json({message: "Getting Posts", posts: posts})
  });


  //Post By id
router.get('/:id', (req, res) => {
    const id = req.params.id
    const foundPost = posts.find(post => post.id === Number(id))
    if(foundPost){
        res.status(200).json({message: `Getting Post with the id of ${id} `, posts: foundPost})
    } else {
        res.status(404).json({ message: 'That post could not be found' });
    }
    
});

//Add Post
router.post('/', (req, res) => {
    const {title, content } = req.body;
    let newPostId = 7;
    const newPost = { id: newPostId, title, content}
    if (title && content){
        posts.push(newPost)
        newPostId++
        res.status(200).json({message: "Adding Post", post: newPost})
    } else if (!title || !content) {
        res.status(404).json({message: "Title and Contenet required"})
    } else {
        res.status(500).json({ message: 'Error adding the post'})
    }
});


//Update Post
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const foundPost = posts.find(post => post.id === Number(id))
    const { title, content } = req.body;
    const updatedPost = {id: Number(id), title, content}
    if (!updatedPost.title || !updatedPost.content) {
        res.status(404).json({message: "Title and Contenet required"})
    } else if (updatedPost.title && updatedPost.content && foundPost){
        const currentPostIndex = posts.findIndex(post => post.id === Number(id))
        posts[currentPostIndex] = updatedPost
        res.status(200).json({message: `Updating Post with the id of ${ id }`, updatedPost})
    } else {
        res.status(500).json({ message: 'Error updating the post'})
    }
    
});


//Delete Post
router.delete('/:id', (req, res) => {
    const id = req.params.id
    const currentPostIndex = posts.findIndex(post => post.id === Number(id))
    if (currentPostIndex) {
        const removed = posts.splice(currentPostIndex, 1)
        res.status(200).json({message: `Deleting Post with the id of ${ id }: Removed`, removed})
    } else {
        res.status(500).json({ message: 'Error deleting the post'})
    }
    
});



module.exports = router;