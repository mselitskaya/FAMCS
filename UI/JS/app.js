var photoPortalApp = (function () {
    function init() {
        document.addEventListener('DOMContentLoaded', domReady);
    }

    function domReady() {
        var user = userService.getActiveUser();
        var isAuthorized = userService.isUserAuthorized();
        var activeUserElement = document.getElementById('activeUser');
        var profileActionElement = document.getElementById('profileAction');
        var closeLoginPopup = document.getElementById('close-login-popup');        
        var loginButton = document.getElementById('login-button');


        if (activeUserElement) {
            activeUserElement.innerText = isAuthorized ? user : null;
        }

        if (profileActionElement) {
            profileActionElement.innerText = isAuthorized ? 'Выйти' : 'Войти';
            profileActionElement.addEventListener ('click', manageStateHandler);
        }

        updateStateControls(isAuthorized);

        if (closeLoginPopup) {
            closeLoginPopup.addEventListener ('click', photoPostClientService.hideLoginPopup);
        }

        if(loginButton){
            loginButton.addEventListener('click', loginHandler);
        }
    }

    function deletePhotoPost(element){
        var photoPostId = element.target.id;

        var isDeletePhotoPost = confirm('Вы действительно хотите удалить этот фото-пост?');

        if(isDeletePhotoPost){
            var removeResult = photoService.removePhotoPost(photoPostId);

            if(removeResult){
                photoPostClientService.clearPhotoPostsContainer();
                photoPostClientService.getPhotoPosts();
                updateStateControls(true);
            }
            else{
                alert('Во время удаления произошла ошибка. Попробуйте повторить позже.');
            }
        }
    }

    function updateStateControls(isAuthorized) {

        var deleteButtons = document.getElementsByClassName('delete-icon');
        var editButtons = document.getElementsByClassName('edit-icon');
        var addPhotoButton = document.getElementById('add-photo-button');

        if (deleteButtons) {
            for (var i = 0; i < deleteButtons.length; i++) {
                if(isAuthorized){
                    if (deleteButtons[i].classList.contains('hide-element')) {
                        deleteButtons[i].classList.remove('hide-element');
                    }
                }
                else{
                    if (!deleteButtons[i].classList.contains('hide-element')) {
                        deleteButtons[i].classList.add('hide-element');
                    }
                }
            }
        }
        
        if(deleteButtons){
            for(var i = 0; i < deleteButtons.length; i++){
                deleteButtons[i].addEventListener('click', deletePhotoPost);
            }
        }

        if (editButtons) {
            for (var i = 0; i < editButtons.length; i++) {
                if(isAuthorized){
                    if (editButtons[i].classList.contains('hide-element')) {
                        editButtons[i].classList.remove('hide-element');
                    }
                }
                else{
                    if (!editButtons[i].classList.contains('hide-element')) {
                        editButtons[i].classList.add('hide-element');
                    }
                }
            }
        }

        if (addPhotoButton) {
            if(isAuthorized){
                if (addPhotoButton.classList.contains('hide-element')) {
                    addPhotoButton.classList.remove('hide-element');
                }
            }
            else{
                if (!addPhotoButton.classList.contains('hide-element')) {
                    addPhotoButton.classList.add('hide-element');
                }
            }
        }
    }

    function loginHandler() {
        var isLogin = photoPostClientService.login();
        if (isLogin) {
            domReady();
        }
    }

    function manageStateHandler(){
        photoPostClientService.showLoginPopup();
        domReady();
    }

    return {
        init: init
    }
})();