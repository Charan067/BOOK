const express = require('express')
const mongoose = require('mongoose')
const Book = require('./models/productModels')
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hellow Node ")
})

app.get("/blog",(req,res)=>{
    res.send("Hellow Node running......")
})
app.get("/books",async(req,res)=>{
    try {
        const books = await Book.find({})
        res.status(200).json(books)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.get("/books/:id",async(req,res)=>{
    try {
        const{id} = req.params
        const books = await Book.findById(id)
        res.status(200).json(books)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.put("/books/:id",async(req,res)=>{
    try {
        const{id} = req.params
        const books = await Book.findByIdAndUpdate(id,req.body);
        if(!books){
            return res.status(404).json({message: `cannot find the book with ${id}`})
        }
        const updatedBooks = await Book.findById(id)
        res.status(200).json(updatedBooks)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


app.delete("/books/:id",async(req,res)=>{
    try {
        const{id} = req.params
        const books = await Book.findByIdAndDelete(id);
        if(!books){
            return res.status(404).json({message: `cannot find the book with ${id}`})
        }
        res.status(200).json(books)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


app.post("/books",async(req,res)=>{
    try {
        const book = await Book.create(req.body)
        res.status(200).json(book)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

mongoose.
connect("mongodb+srv://Root:Root123@nodeapp.snrkabj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeApp")
.then(()=>{
    console.log("connected to mongoDB")
    app.listen(3000,()=>{
        console.log("npm is running...")
    })
}).catch((error)=>{
    console.log(error)
})