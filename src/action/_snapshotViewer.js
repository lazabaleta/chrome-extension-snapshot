function getImageConfig(queryString){
    var _result = {};
    var _queryString = queryString.substring(1).split("&");
    _queryString.forEach(element => {
        _result[element.split("=")[0]] = element.split("=")[1];
    });
    return _result;
}

module.exports = getImageConfig;