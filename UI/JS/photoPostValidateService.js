var photoPostValidateService = (function () {
    
    function isValidFieldFormat(field, expectedType){
        var actualType = typeof field;
        
        if (actualType !== expectedType) {
            console.log('Неверный формат параметра ' + actualType);
            return false;
        }

        return true;
    }
    
    return {
        isValidFieldFormat: isValidFieldFormat
    }
})();