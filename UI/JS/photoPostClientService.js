var photoPostClientService = (function () {

    function renderPhotoPost(photoPost) {
        const template = document.getElementById('photo-post-template');
        const container = document.getElementById('photoPosts');
        let newPhotoPost = document.importNode(template.content, true);
        let dataTargets = newPhotoPost.querySelectorAll('[data-target]');

        [].forEach.call(dataTargets || [], (element) => {

            let key = element.getAttribute('data-target');

            switch(key){
                case 'id':
                    element.setAttribute('id', String(photoPost[key]));
                    break;
                case 'photoLink':
                    element.setAttribute('src',String(photoPost[key]));
                    break;
                case 'description':
                case 'author':
                    element.innerText = String(photoPost[key]);
                    break;
                case 'createdAt':
                    element.innerText = photoPost[key].toLocaleDateString(); 
                    break;
                case 'hashTags': 
                    element.innerText = photoPost[key].join(' ');
                    break;
                case 'likes':
                    element.innerText = 'Понравилось ' + photoPost[key].length ; 
                    break;
            }
        });
        container.appendChild(newPhotoPost);
    }

    function getPhotoPosts(skip, top, filterConfig) {
        var photoPosts = photoService.getPhotoPosts(skip, top, filterConfig);
        photoPosts.forEach((item) => renderPhotoPost(item))
    }

    function removePhotoPost(id){
        var result = photoService.removePhotoPost(id);
        if(result) {
            getPhotoPosts();
        }
        else {
            alert ('При удалении поста произошла ошибка')
        }
    }

    function addPhotoPost(photoPost) {
        var result = photoService.addPhotoPost(photoPost);
        if(result){
            getPhotoPosts();
        }
        else{
            alert('При добавлении нового фото-поста что-то пошло не так =)');
        }
    }

    function getPhotoPost(id){
        return photoService.getPhotoPost(id);
    }
    
    function editPhotoPost(id, photoPost) {
        var editresult = photoService.editPhotoPost(id, photoPost);
        if (editresult) {
            getPhotoPosts();
        }
        else {
            alert('При редактировании фото-поста возникла ошибка');
        }
    }

    function getAllHashTags(){
        var hashTags = photoService.getAllHashTags();
        var hashTagsSelector = document.getElementById('hashTags');

        if(hashTagsSelector){
            hashTags.forEach(function(hashTag){
                var option = document.createElement("option");
                option.text = hashTag;
                option.value = hashTag;
                hashTagsSelector.add(option);
            });
        }
    }

    return {
        getPhotoPosts: getPhotoPosts,
        removePhotoPost: removePhotoPost,
        addPhotoPost: addPhotoPost,
        getPhotoPost: getPhotoPost,
        editPhotoPost: editPhotoPost,
        getAllHashTags: getAllHashTags
    }
})();