const fs = require('fs');
const path = require('path');

let vodafone_product_catalog = [{
    "id": "1",
    "name": "Vodafone Basic Firewall for Business",
    "description": "This product offering suggests a firewall service that can be deployed in business customer premise.",
}]
let vodafone_shopping_cart = [{
    "id": "1",
    "cartName": "Vodafone Dummy cart",
    "cartItem": [
        {
            "id": "1",
            "action": "add",
            "quantity": 1,
        }
    ]
}]

let orange_product_catalog = [{
    "id": "1",
    "name": "Orange Basic Firewall for Business",
    "description": "This product offering suggests a firewall service that can be deployed in business customer premise.",
}]
let orange_shopping_cart = [{
    "id": "1",
    "cartName": "Orange Dummy cart",
    "cartItem": [
        {
            "id": "1",
            "action": "add",
            "quantity": 1,
        }
    ]
}]


readDataFromStorage = function (isp, service) {
    console.log('reading data from storage :')
    console.log('isp : ', isp)
    console.log('service : ', service)
    rawdata = {};
    if (isp == 'vodafone') {
        if (service == 'product_catalog') {
            //rawdata = fs.readFileSync(path.join(__dirname, '../storage/vodafone.product_catalog.json'));
            rawdata = vodafone_product_catalog;
        } else if (service == 'shopping_cart') {
            //rawdata = fs.readFileSync(path.join(__dirname, '../storage/vodafone.shopping_cart.json'));
            rawdata = vodafone_shopping_cart;
        }
    } else if (isp == 'orange') {
        if (service == 'product_catalog') {
            //rawdata = fs.readFileSync(path.join(__dirname, '../storage/orange.product_catalog.json'));
            rawdata = orange_product_catalog;
        } else if (service == 'shopping_cart') {
            //rawdata = fs.readFileSync(path.join(__dirname, '../storage/orange.shopping_cart.json'));
            rawdata = orange_shopping_cart;
        }
    }
    console.log(rawdata);
    //let data = JSON.parse(rawdata);
    //console.log('Read data from storage : ', data);
    return rawdata;
}

writeDataIntoStorage = function (input_data, isp, service) {
    let data = JSON.stringify(input_data);
    console.log('Storage write ', data)
    if (data != undefined) {
        if (isp == 'vodafone') {
            if (service == 'product_catalog') {
                //fs.writeFileSync(path.join(__dirname, '../storage/vodafone.product_catalog.json'), data);
                vodafone_product_catalog = input_data;
            } else if (service == 'shopping_cart') {
                //fs.writeFileSync(path.join(__dirname, '../storage/vodafone.shopping_cart.json'), data);
                vodafone_shopping_cart = input_data;
            }
        } else if (isp == 'orange') {
            if (service == 'product_catalog') {
                //fs.writeFileSync(path.join(__dirname, '../storage/orange.product_catalog.json'), data);
                orange_product_catalog = input_data;
            } else if (service == 'shopping_cart') {
                //fs.writeFileSync(path.join(__dirname, '../storage/orange.shopping_cart.json'), data);
                orange_shopping_cart = input_data;
            }
        }
    }
}


module.exports = {
    readDataFromStorage: readDataFromStorage,
    writeDataIntoStorage: writeDataIntoStorage
};