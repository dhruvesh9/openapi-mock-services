const Response = require('../util/response_util');
const Storage = require('../util/storage_util');

exports.product_list = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET all vodafone products')
    console.log('--------------------------------------------');

    if (req.headers['x-isp-identifier'] == 'vodafone') {
        res.send(Response.createResponse(null, Storage.readDataFromStorage('vodafone', 'product_catalog')));
    }else{
        let error = {
            'message':'invalid request, please pass the correct value for header : x-isp-identifier'
        }; 
        res.send(Response.createResponse(error, null));
    }

    
};

exports.product_by_id = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET vodafone product by id');
    console.log(req.params);
    let id = req.params.id;


    let requiredProduct = null;

    if (req.headers['x-isp-identifier'] == 'vodafone') {
        let products = readDataFromStorage('vodafone', 'product_catalog');
        for (let i = 0; i < products.length; i++) {
            if (products[i] != undefined && products[i].id == id) {
                requiredProduct = products[i];
                break;
            }
        }
    }
    console.log('--------------------------------------------');
    res.send(Response.createResponse(null, requiredProduct));
}

exports.create_shopping_cart = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('POST vodafone shopping cart')
    console.log(req.body);

    if (req.headers['x-isp-identifier'] == 'vodafone' && req.body != undefined ) {
        let shoppingCarts = readDataFromStorage('vodafone', 'shopping_cart');

        let newCart = req.body;

        shoppingCarts.push(newCart);

        writeDataIntoStorage(shoppingCarts, 'vodafone', 'shopping_cart');
        console.log('--------------------------------------------');
        res.send(Response.createResponse(null, newCart));
    } else {
        console.log('--------------------------------------------');
        res.send(Response.createResponse(null, "NOT POSTED, request body empty"));
    }
}

exports.shopping_cart_list = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET all vodafone shopping carts')
    console.log('--------------------------------------------');

    if (req.headers['x-isp-identifier'] == 'vodafone') {
        res.send(Response.createResponse(null, Storage.readDataFromStorage('vodafone', 'product_catalog')));
    }else{
        let error = {
            'message':'invalid request, please pass the correct value for header : x-isp-identifier'
        }; 
        res.send(Response.createResponse(error, null));
    }
};

exports.shopping_cart_by_id = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET vodafone shopping cart by id');
    console.log(req.params);

    let id = req.params.id;

    let requiredCart = null;
    if (req.headers['x-isp-identifier'] == 'vodafone') {
        let shoppingCarts = readDataFromStorage('vodafone', 'shopping_cart');
        for (let i = 0; i < shoppingCarts.length; i++) {
            if (products[i] != undefined && shoppingCarts[i].id == id) {
                requiredCart = shoppingCarts[i];
                break;
            }
        }
    }

    console.log('--------------------------------------------');
    res.send(Response.createResponse(null, requiredCart));
}