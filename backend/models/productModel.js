import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, "Product name is required"]
    },

    description : {
        type: String,
        required : [true, "Description is required"]
    },
    price : {
        type : Number,
        required : [true, "Price is required"],
        min : [0, "Price cannot be negative"],
        default : 0
    },
    categogry : {
        type : String,
        required : [true, "Category is required"]
    },
    brand : {
        type : String
    },
    countInStock : {
        type : Number,
        required : true,
        min : [0, "Stock can't be negative"],
        default : 0,
    },
    images : [
        {
            type : Array,
            required : [true, "Images are required"]
        }
    ],

    timestamps : true
});

const Product = mongoose.model("Product", productSchema);

export default Product;