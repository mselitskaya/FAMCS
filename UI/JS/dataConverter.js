var dataConverter = (function () {

    function convertToString(data) {
        var result = JSON.stringify(data);
        return result
    }
    function conventToObject(dataString) {
        var result = JSON.parse(dataString, function (key, value) {
            if (key == "createdAt") { 
                return new Date(value); 
            }
            return value;
        });
        return result;
    }
    return {
        convertToString: convertToString,
        conventToObject: conventToObject
    }
})();