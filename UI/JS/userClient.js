var userService = (function(){
    var user = 'Mariya Selitskaya';

    function isUserAuthorized (){
        return user != null;
    }

    function getActiveUser (){
        return user;
    }

    return {
        isUserAuthorized: isUserAuthorized,
        getActiveUser: getActiveUser
    }
})();