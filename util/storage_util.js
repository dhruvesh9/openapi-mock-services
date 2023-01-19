const fs = require('fs');

readDataFromStorage = function (isp, service) {

    if (isp == 'vodafone') {
        if (service == 'product_catalog') {
            rawdata = fs.readFileSync('./storage/vodafone.product_catalog.json');
        } else if (service == 'shopping_cart') {
            rawdata = fs.readFileSync('./storage/vodafone.shopping_cart.json');
        }
    } else if (isp == 'orange') {
        if (service == 'product_catalog') {
            rawdata = fs.readFileSync('./storage/orange.product_catalog.json');
        } else if (service == 'shopping_cart') {
            rawdata = fs.readFileSync('./storage/orange.shopping_cart.json');
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
            fs.writeFileSync('./storage/vodafone.product_catalog.json', data);
        } else if (service == 'shopping_cart') {
            fs.writeFileSync('./storage/vodafone.shopping_cart.json', data);
        }
    } else if (isp == 'orange') {
        if (service == 'product_catalog') {
            fs.writeFileSync('./storage/orange.product_catalog.json', data);
        } else if (service == 'shopping_cart') {
            fs.writeFileSync('./storage/orange.shopping_cart.json', data);
        }
    }

}


module.exports = {
    readDataFromStorage: readDataFromStorage,
    writeDataIntoStorage: writeDataIntoStorage
};