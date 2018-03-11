var photoPostClientService = (function () {

    const template = document.getElementById('photo-post-template');
    const container = document.getElementById('photoPosts');

    function renderPhotoPost(photoPost) {
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
       return photoService.removePhotoPost(id);
    }

    function addPhotoPost(photoPost) {
        return photoService.addPhotoPost(photoPost);
    }

    function getPhotoPost(id){
        return photoService.getPhotoPost(id);
    }
    
    function editPhotoPost(id, photoPost){
        return photoService.editPhotoPost(id, photoPost);
    }

    return {
        getPhotoPosts: getPhotoPosts,
        removePhotoPost: removePhotoPost,
        addPhotoPost: addPhotoPost,
        getPhotoPost: getPhotoPost,
        editPhotoPost: editPhotoPost

    }
})();