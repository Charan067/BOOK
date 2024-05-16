const mongoose = require('mongoose')
const BookStoreView = mongoose.Schema(
    {
        name:{
            type : String,
            required:[true,"Please enter a product name"]
        },
    
        price:{
            type: Number,
            requied: true
        },
        summary:{
            type: String,
            required: true
        },
        author:{
            type: String,
            required: [true,"please enter author name"]
        },
        image:{
            type: String,
            required: false
        }
    },
    {
        timestamps:true
    }
)

const Book = mongoose.model('Book',BookStoreView)
module.exports = Book