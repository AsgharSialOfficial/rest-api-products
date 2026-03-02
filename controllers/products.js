const Product = require('../models/products')

const getallProducts = async (req,res)=>{

     const {name, company, featured, sort, select } = req.query;

    const queryObject = {};
    if(name){
        queryObject.name = {$regex:name, $options:'i'}
    }
    if(featured!==undefined){
        queryObject.featured = featured==='true';
    }
    if(company){
        queryObject.company = {$regex:company, $options:'i'};
    }
     let products = Product.find(queryObject);
    if(sort){
        let sortFix = sort.split(',').join(' ');
        products = products.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(',').join(' ');
        products = products.select(selectFix);
    }
    let page = Number(req.query.page)||1;
    let limit = Number(req.query.limit)||3;
    let skip = (page-1)*limit;
    products = products.skip(skip).limit(limit);

let result = await products


    return res.json(result);


    

}

const getalltestingProducts = async (req,res)=>{
    const {name, company, featured, sort, select } = req.query;

    const queryObject = {};
    if(name){
        queryObject.name = {$regex:name, $options:'i'}
    }
    if(featured!==undefined){
        queryObject.featured = featured==='true';
    }
    if(company){
        queryObject.company = {$regex:company, $options:'i'};
    }
     let products = Product.find(queryObject);
    if(sort){
        let sortFix = sort.split(',').join(' ');
        products = products.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(',').join(' ');
        products = products.select(selectFix);
    }
    let page = Number(req.query.page)||1;
    let limit = Number(req.query.limit)||3;
    let skip = (page-1)*limit;
    products = products.skip(skip).limit(limit);

let result = await products


    return res.json(result);

}

module.exports = {getallProducts, getalltestingProducts};