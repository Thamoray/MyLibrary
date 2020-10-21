const express =require('express')
const author = require('../models/author')
const router = express.Router()
const Author = require('../models/author')

// All authors route 
router.get('/',(req,res)=>{
    res.render('authors/index')
})

// New authors route
router.get('/new',(req,res)=>{
    res.render('authors/new',{author: new Author()})
})
//Create author route
router.post('/',(req,res)=>{
    const author = new Author({
        name: req.body.name
    })
    author.save((err, newAuthor)=>{
        if(err){
            res.render('authors/new',{
                author: author,
                errorMessage: 'Error creating Author'
            })
        }else{
            //res.redirect(`authors/${newAuthor.id}`)
            res.redirect(`authors`)
        }
       
    })

})

module.exports=router