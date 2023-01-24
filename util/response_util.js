function createResponse(error, dbResult) {
    var result = {};
    if (error == null || error == undefined) {
        result['data'] = dbResult;
    } else {
        result['status'] = 'fail';
        result['data'] = error;
        result['code'] = 1;
    }

    return result;
}

module.exports = {
    createResponse: createResponse
};