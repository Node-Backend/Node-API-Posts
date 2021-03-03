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
    res.status(200).json({message: "Adding Post"})
});


//Update Post
router.put('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).json({message: `Updating Post with the id of ${ id }`})
});


//Delete Post
router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).json({message: `Deleting Post with the id of ${ id }`})
});



module.exports = router;