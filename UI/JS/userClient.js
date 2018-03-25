var userService = (function () {
    var users = [
    {
        id: 1,
        name: 'Mariya Selitskaya',
        login: 'marry',
        password: '12345'
    },
    {
        id: 2,
        name: 'Pavel Durov',
        login: 'pdurov',
        password: '12345'
    },
    {
        id: 3,
        name: 'Mark Zuckerberg',
        login: 'mzuck',
        password: '12345'
    }];

    var user = localStorage.getItem('user') ? localStorage.getItem('user') : null;

    function isUserAuthorized() {
        return user != null;
    }

    function getActiveUser() {
        return user;
    }

    function getUsers() {
        return users;
    }

    function getUserById(id) {
        var index = users.findIndex(user => user.id == id);
        if (index != -1) {
            return users[index];
        }
        return null;
    }

    function getUserByName(name) {
        var index = users.findIndex(user => user.name == name);
        if (index != -1) {
            return users[index];
        }
        return null;
    }

    function login(login, password) {
        var currentUser = users.find(x => x.login == login && x.password == password);
        if (currentUser) {
            user = currentUser.name;
            localStorage.setItem('user', user);
            return true;
        }
        return false;
    }

    function logout(){
        localStorage.removeItem('user');
        user = localStorage.getItem('user');
    }

    return {
        isUserAuthorized: isUserAuthorized,
        getActiveUser: getActiveUser,
        getUsers: getUsers,
        getUserById: getUserById,
        getUserByName: getUserByName,
        login: login,
        logout: logout
    }
})();