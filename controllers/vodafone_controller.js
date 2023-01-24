const Response = require('../util/response_util');
const Storage = require('../util/storage_util');

exports.product_list = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET all vodafone products')
    console.log('--------------------------------------------');

    res.send(Response.createResponse(null, Storage.readDataFromStorage('vodafone', 'product_catalog')));

};

exports.product_by_id = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET vodafone product by id');
    console.log(req.params);
    let id = req.params.id;


    let requiredProduct = null;


    let products = readDataFromStorage('vodafone', 'product_catalog');
    for (let i = 0; i < products.length; i++) {
        if (products[i] != undefined && products[i].id == id) {
            requiredProduct = products[i];
            break;
        }
    }

    console.log('--------------------------------------------');
    res.send(Response.createResponse(null, requiredProduct));
}

exports.create_shopping_cart = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('POST vodafone shopping cart')
    console.log(req.body);
    console.log(req.body == {})
    if (req.body && Object.keys(req.body).length !== 0) {
        let shoppingCarts = readDataFromStorage('vodafone', 'shopping_cart');

        let newCart = req.body;

        shoppingCarts.push(newCart);
        console.log('all shopping carts to be written in storage : ',shoppingCarts)
        writeDataIntoStorage(shoppingCarts, 'vodafone', 'shopping_cart');
        console.log('--------------------------------------------');
        res.send(Response.createResponse(null, newCart));
    } else {
        console.log('--------------------------------------------');
        res.status(400).send(Response.createResponse("NOT POSTED, request body empty", null));
    }
}

exports.shopping_cart_list = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET all vodafone shopping carts')
    console.log('--------------------------------------------');

    res.send(Response.createResponse(null, Storage.readDataFromStorage('vodafone', 'product_catalog')));

};

exports.shopping_cart_by_id = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET vodafone shopping cart by id');
    console.log(req.params);

    let id = req.params.id;

    let requiredCart = null;

    let shoppingCarts = readDataFromStorage('vodafone', 'shopping_cart');
    for (let i = 0; i < shoppingCarts.length; i++) {
        if (products[i] != undefined && shoppingCarts[i].id == id) {
            requiredCart = shoppingCarts[i];
            break;
        }
    }


    console.log('--------------------------------------------');
    res.send(Response.createResponse(null, requiredCart));
}