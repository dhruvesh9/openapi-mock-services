const fs = require('fs');
const path = require('path');
readDataFromStorage = function (isp, service) {

    if (isp == 'vodafone') {
        if (service == 'product_catalog') {
            rawdata = fs.readFileSync(path.join(__dirname, '../storage/vodafone.product_catalog.json'));
        } else if (service == 'shopping_cart') {
            rawdata = fs.readFileSync(path.join(__dirname, '../storage/vodafone.shopping_cart.json'));
        }
    } else if (isp == 'orange') {
        if (service == 'product_catalog') {
            rawdata = fs.readFileSync(path.join(__dirname, '../storage/orange.product_catalog.json'));
        } else if (service == 'shopping_cart') {
            rawdata = fs.readFileSync(path.join(__dirname, '../storage/orange.shopping_cart.json'));
        }
    }

    let data = JSON.parse(rawdata);
    console.log(data);
    return data;
}

writeDataIntoStorage = function (input_data, isp, service) {
    let data = JSON.stringify(input_data);
    if (isp == 'vodafone') {
        if (service == 'product_catalog') {
            fs.writeFileSync(path.join(__dirname, '../storage/vodafone.product_catalog.json', data));
        } else if (service == 'shopping_cart') {
            fs.writeFileSync(path.join(__dirname, '../storage/vodafone.shopping_cart.json', data));
        }
    } else if (isp == 'orange') {
        if (service == 'product_catalog') {
            fs.writeFileSync(path.join(__dirname, '../storage/orange.product_catalog.json', data));
        } else if (service == 'shopping_cart') {
            fs.writeFileSync(path.join(__dirname, '../storage/orange.shopping_cart.json', data));
        }
    }

}


module.exports = {
    readDataFromStorage: readDataFromStorage,
    writeDataIntoStorage: writeDataIntoStorage
};