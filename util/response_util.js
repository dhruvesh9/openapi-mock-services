function createResponse(error, dbResult) {
    var result = {};
    if (error == null || error == undefined) {
        result = dbResult
    } else {
        result['status'] = 'fail';
        result['message'] = error;
        result['code'] = 1;
    }

    return result;
}

module.exports = {
    createResponse: createResponse
};