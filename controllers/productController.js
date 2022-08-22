const product = require('../models/product');
// const product = require('../models/product');

const getAllProducts = async(req,res) =>{
    try{
        const products = await product.find();
        res.json(products);
    }catch(err){
        res.send('Error'+err);
    }
};

const getProduct = async(req,res) => {
    try{
        const products = await product.findById(req.params.id);
        res.json(products);
    }catch(err){
        res.send('Error'+err);
    }
};

const create = async(req,res) =>{
    const products = new product({
        name: req.body.name,
        price:req.body.price,
        quantity:req.body.quantity

    })
    try{
        const a1 = await products.save();
        res.json(a1);
    }catch(err){
        res.send('Error');
    }
};

const updateProduct = async(req,res) =>{
    try{
        const products = await product.findById(req.params.id);
        products.quantity=req.body.quantity;
        const a1 = await products.save();
        res.json(a1);
    }catch(err){
        res.send('Error');
    }
}

const deleteProduct = async(req,res) =>{
    try{
        const products = await product.findById(req.params.id);
        const a1 = await products.remove();
        res.json(a1);
    }catch(err){
        res.send("id is not found");
    }
}


module.exports ={ getAllProducts,getProduct,create,updateProduct,deleteProduct};