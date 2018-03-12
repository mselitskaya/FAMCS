var user =  'Mariya Selitskaya';
var isAuthorized = user != null;
var activeUserElement = document.getElementById('activeUser');
var profileActionElement = document.getElementById('profileAction');


if (activeUserElement) {
    activeUserElement.innerText = isAuthorized ? user : null;
}

if (profileActionElement) {
    profileActionElement.innerText = isAuthorized ? 'Выйти' : 'Войти';
}

var deleteButtons = document.getElementsByClassName('delete-icon');
var editButtons = document.getElementsByClassName('edit-icon');

if(isAuthorized && deleteButtons){
    for(var i = 0; i < deleteButtons.length; i++){
        if(deleteButtons[i].classList.contains('hide-element')){
            deleteButtons[i].classList.remove('hide-element');
        }
    }
}

if(isAuthorized && editButtons){
    for(var i = 0; i < editButtons.length; i++){
        if(editButtons[i].classList.contains('hide-element')){
            editButtons[i].classList.remove('hide-element');
        }
    }
}