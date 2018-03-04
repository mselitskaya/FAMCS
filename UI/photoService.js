var photoService = (function () {
    var photoStorage = [
        {
            id: '1',
            description: 'Закат – это своеобразный итог дня. Заход солнца говорит о том, что день подходитк концу. В отличие от бодрого и оптимистического рассвета, закат наполнен романтикой и таинственностью...',
            createdAt: new Date('2018-03-01T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/03.jpg',
            hashTags: ['#утро'],
            likes: []
        },
        {
            id: '2',
            description: 'Закат – это своеобразный итог дня. Заход солнца говорит о том, что день подходитк концу. В отличие от бодрого и оптимистического рассвета, закат наполнен романтикой и таинственностью...',
            createdAt: new Date('2018-03-04T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/03.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '3',
            description: 'Закат – это своеобразный итог дня. Заход солнца говорит о том, что день подходитк концу. В отличие от бодрого и оптимистического рассвета, закат наполнен романтикой и таинственностью...',
            createdAt: new Date('2018-03-03T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/03.jpg',
            hashTags: [],
            likes: []
        }
    ];

    function getPhotoPosts(skip = 0, top = 10, filterConfig) {
        if (filterConfig) {
            return photoStorage
                .filter(photoPost => photoPost.author == filterConfig.author ||
                    (filterConfig.createdAt && photoPost.createdAt.getDate() == filterConfig.createdAt.getDate()) ||
                    (filterConfig.hashTags && photoPost.hashTags && filterConfig.hashTags.some(hashTag => photoPost.hashTags.some(tag => tag == hashTag)))
                )
                .sort(sortByDate)
                .slice(skip, skip + top);
        }

        return photoStorage
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

        return photoStorage.find(photoPost => photoPost.id == id);
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
        if (!photoPost.description) {
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
        
        photoStorage.push(photoPost);
        return true;
    }

    function removePhotoPost(id) {
        if (typeof id !== 'string') {
            console.log('Неверный формат параметра id: ' + typeof id);
            return false;
        }

        var index = photoStorage.findIndex(photoPost => photoPost.id == id);

        if (index == -1) {
            console.log('Фото-пост с id = ' + id + ' не существует.');
            return false;
        }

        photoStorage.splice(index, 1);
        return true;
    }

    return {
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        removePhotoPost: removePhotoPost
    }
})();