var photoService = (function () {

    function getPhotoPosts(skip = 0, top = 10, filterConfig) {
        if (filterConfig) {
            return photoPostDataStorage.getPhotoPosts()
                .filter(photoPost => photoPost.author == filterConfig.author ||
                    (filterConfig.createdAt && photoPost.createdAt.getDate() == filterConfig.createdAt.getDate()) ||
                    (filterConfig.hashTags && photoPost.hashTags && filterConfig.hashTags.some(hashTag => photoPost.hashTags.some(tag => tag == hashTag)))
                )
                .sort(sortByDate)
                .slice(skip, skip + top);
        }

        return photoPostDataStorage.getPhotoPosts()
            .sort(sortByDate)
            .slice(skip, skip + top);
    }

    function sortByDate(postOne, postTwo) {
        if (postOne && postTwo) {
            if (postOne.createdAt > postTwo.createdAt) return -1;
            if (postOne.createdAt < postTwo.createdAt) return 1;
            if (postOne.createdAt == postTwo.createdAt) return 0;
        }
        return -1;
    }

    function getPhotoPost(id) {
        if (typeof id !== 'string') {
            console.log('Неверный формат параметра id: ' + typeof id);
            return;
        }

        return photoPostDataStorage.getPhotoPosts().find(photoPost => photoPost.id == id);
    }

    function validatePhotoPost(photoPost) {
        if (!photoPost) {
            console.log('Параметр photoPost неопределен')
            return false;
        }
        if (!photoPost.id) {
            console.log('Поле id обязательное для заполнения');
            return false;
        }
        if (typeof photoPost.id !== 'string') {
            console.log('Неверный формат параметра id: ' + typeof photoPost.id);
            return false;
        }
        if (photoPost.description != null) {
            console.log('Поле description обязательное для заполнения');
            return false;
        }
        if (typeof photoPost.description !== 'string') {
            console.log('Неверный формат параметра description: ' + typeof photoPost.description);
            return false;
        }
        if (photoPost.description.length >= 200) {
            console.log('Превышено максимально допустимое количество символов для поля description');
            return false;
        }
        if (!photoPost.createdAt) {
            console.log('Поле createdAt обязательное для заполнения');
            return false;
        }
        if (typeof photoPost.createdAt !== 'object') {
            console.log('Неверный формат параметра createdAt: ' + typeof photoPost.createdAt);
            return false;
        }
        if (!photoPost.author) {
            console.log('Поле author обязательное для заполнения');
            return false;
        }
        if (typeof photoPost.author !== 'string') {
            console.log('Неверный формат параметра author: ' + typeof photoPost.author);
            return false;
        }
        if (photoPost.author.length == 0) {
            console.log('Поле author не должно быть пустым');
            return false;
        }
        if (!photoPost.photoLink) {
            console.log('Поле photoLink обязательное для заполнения');
            return false;
        }
        if (typeof photoPost.photoLink !== 'string') {
            console.log('Неверный формат параметра photoLink: ' + typeof photoPost.photoLink);
            return false;
        }
        if (photoPost.photoLink.length == 0) {
            console.log('Поле photoLink не должно быть пустым');
            return false;
        }
        if (photoPost.hashTags && typeof photoPost.hashTags !== 'object') {
            console.log('Неверный формат параметра hashTags: ' + typeof photoPost.hashTags);
            return false;
        }
        if (photoPost.likes && typeof photoPost.likes !== 'object') {
            console.log('Неверный формат параметра likes: ' + typeof photoPost.likes);
            return false;
        }
        return true;
    }

    function addPhotoPost(photoPost) {
        if (validatePhotoPost(photoPost) != true) {
            console.log('Проверьте корректность введенных данных');
            return false;
        }

        var post = getPhotoPost(photoPost.id);

        if (post) {
            console.log('Фото-пост с id = ' + photoPost.id + ' уже существует.');
            return false;
        }

        photoPostDataStorage.getPhotoPosts().push(photoPost);
        return true;
    }

    function removePhotoPost(id) {
        if (typeof id !== 'string') {
            console.log('Неверный формат параметра id: ' + typeof id);
            return false;
        }

        var index = photoPostDataStorage.getPhotoPosts().findIndex(photoPost => photoPost.id == id);

        if (index == -1) {
            console.log('Фото-пост с id = ' + id + ' не существует.');
            return false;
        }

        photoPostDataStorage.getPhotoPosts().splice(index, 1);
        return true;
    }

    function editPhotoPost(id, photoPost) {
        if (!id) {
            console.log('Поле id обязательное');
            return false;
        }
        if (typeof id !== 'string') {
            console.log('Неверный формат параметра id: ' + typeof photoPost.id);
            return false;

        }
        if (!photoPost) {
            console.log('Нет данных для обновления');
        }
        if (typeof photoPost !== 'object') {
            console.log('Неверный формат параметра photoPost ' + typeof photoPost);
            return false;
        }


        var index = photoPostDataStorage.getPhotoPosts().findIndex(photoPost => photoPost.id == id);

        if (index == -1) {
            console.log('Фото-пост с id = ' + id + ' не существует.');
            return false;
        }
        if (photoPost.photoLink) {
            if (typeof photoPost.photoLink !== 'string') {
                console.log('Неверный формат параметра photoLink ' + typeof photoPost.photoLink);
                return false;
            }
            if (photoPost.photoLink.length == 0) {
                console.log('Поле photoLink не должно быть пустым');
                return false;
            }
            photoPostDataStorage.getPhotoPosts()[index]["photoLink"] = photoPost.photoLink;
        }

        if (photoPost.description != null) {
            if (typeof photoPost.description !== 'string') {
                console.log('Неверный формат параметра description ' + typeof photoPost.description);
                return false;
            }
            photoPostDataStorage.getPhotoPosts()[index]["description"] = photoPost.description;
        }

        if (photoPost.hashTags) {
            if (typeof photoPost.hashTags !== 'object') {
                console.log('Неверный формат параметра hashTags ' + typeof photoPost.hashTags);
            }
            photoPostDataStorage.getPhotoPosts()[index]["hashTags"] = photoPost.hashTags;
        }
        if (photoPost.hashTags) {
            if (typeof photoPost.hashTags !== 'object') {
                console.log('Неверный формат параметра hashTags ' + typeof photoPost.hashTags);
            }
            photoPostDataStorage.getPhotoPosts()[index]["hashTags"] = photoPost.hashTags;
        }

        if (photoPost.likes) {
            if (typeof photoPost.likes !== 'object') {
                console.log('Неверный формат параметра likes ' + typeof photoPost.likes);
            }
            photoPostDataStorage.getPhotoPosts()[index]["likes"] = photoPost.likes;
        }
        return true;
    }
    return {
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        removePhotoPost: removePhotoPost,
        editPhotoPost: editPhotoPost

    }
})();