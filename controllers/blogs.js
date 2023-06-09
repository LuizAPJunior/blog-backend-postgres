
const router = require('express').Router()

const { Blog } = require('../models')

router.get('/', async (_req, res) => {
    const blogs = await Blog.findAll()
    res.json(blogs)
  })

router.post('/', async (req, res, next) => {
    try {
        const blog = await Blog.create(req.body)
        res.json(blog)
    } catch(error) {
        next(error)
    }
    
})

const blogFinder = async(req, res, next) => {
    req.blog = await Blog.findByPk(req.params.id)
    next()
}


router.get('/:id', blogFinder, async (req, res) => {
    if (req.blog) {
        res.json(req.blog)
    } else {
        res.status(404).end()
    }
   
})

router.delete('/:id', blogFinder, async (req, res) => {
    if (req.blog) {
        await req.blog.destroy()
    } 
    res.status(204).end()  
})

router.patch('/:id', blogFinder, async (req, res, next) => {
   try { 
        if (req.blog) {
            req.blog.likes = req.body.likes
            await req.blog.save()
            res.json(req.blog)
        } else {
            res.status(404).end()
        }
    } catch(error) {
        next(error)
    }
})


module.exports = router