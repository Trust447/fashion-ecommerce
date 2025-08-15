import Product from "../models/productModel";

/*
    @desc  Get all products
    @route GET /api/product
    @access Public
*/ 

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}


/*
@desc get a single product bi ID
@route GET /api/products/:id
@access Public
*/

export const getProductById = async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        }else{
            res.statustus(404).json({message: "Product not found"})
        }
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}
