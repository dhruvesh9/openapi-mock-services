const Response = require('../util/response_util');
const Storage = require('../util/storage_util');

exports.product_list = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET all orange products')
    console.log('--------------------------------------------');


    res.send(Response.createResponse(null, Storage.readDataFromStorage('orange', 'product_catalog')));

};

exports.product_by_id = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET orange product by id');
    console.log(req.params);
    let id = req.params.id;


    let requiredProduct = null;


    let products = readDataFromStorage('orange', 'product_catalog');
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
    console.log('POST orange shopping cart')
    console.log(req.body);

    if (req.body != undefined) {
        let shoppingCarts = readDataFromStorage('orange', 'shopping_cart');

        let newCart = req.body;

        shoppingCarts.push(newCart);

        writeDataIntoStorage(shoppingCarts, 'orange', 'shopping_cart');
        console.log('--------------------------------------------');
        res.send(Response.createResponse(null, newCart));
    } else {
        console.log('--------------------------------------------');
        res.send(Response.createResponse(null, "NOT POSTED, request body empty"));
    }
}

exports.shopping_cart_list = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET all orange shopping carts')
    console.log('--------------------------------------------');


    res.send(Response.createResponse(null, Storage.readDataFromStorage('orange', 'product_catalog')));

};

exports.shopping_cart_by_id = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('GET orange shopping cart by id');
    console.log(req.params);

    let id = req.params.id;

    let requiredCart = null;

    let shoppingCarts = readDataFromStorage('orange', 'shopping_cart');
    for (let i = 0; i < shoppingCarts.length; i++) {
        if (products[i] != undefined && shoppingCarts[i].id == id) {
            requiredCart = shoppingCarts[i];
            break;
        }
    }


    console.log('--------------------------------------------');
    res.send(Response.createResponse(null, requiredCart));
}