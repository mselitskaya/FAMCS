var photoService = (function () {
    var photoStorage = [
        {
            id: '1',
            description: 'Закат – это своеобразный итог дня. Заход солнца говорит о том, что день подходитк концу. В отличие от бодрого и оптимистического рассвета, закат наполнен романтикой и таинственностью...',
            createdAt: new Date('2018-03-01T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/01.jpg',
            hashTags: ['#вечер, #закат, #романтика'],
            likes: []
        },
        {
            id: '2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-03-04T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/02.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-03-03T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/03.jpg',
            hashTags: ['#зима, #холодно, #солнце'],
            likes: []
        },
        {
            id: '4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-03-07T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/04.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-02-29T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/05.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-02-21T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/06.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '7',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-02-18T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/07.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-02-15T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/08.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '9',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-02-11T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/09.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '10',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-02-09T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/10.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '11',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-02-07T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/11.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '12',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-02-05T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/12.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '13',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-02-03T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/13.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '14',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-02-01T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/14.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '15',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-01-30T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/15.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '16',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-01-27T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/16.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '17',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-01-25T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/17.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '18',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-01-20T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/18.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '19',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-01-18T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/19.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '20',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-01-15T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/20.jpg',
            hashTags: [],
            likes: []
        },
        {
            id: '21',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-01-07T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/21.jpg',
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


        var index = photoStorage.findIndex(photoPost => photoPost.id == id);

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
            photoStorage[index]["photoLink"] = photoPost.photoLink;
        }

        if (photoPost.description != null) {
            if (typeof photoPost.description !== 'string') {
                console.log('Неверный формат параметра description ' + typeof photoPost.description);
                return false;
            }
            photoStorage[index]["description"] = photoPost.description;
        }

        if (photoPost.hashTags) {
            if (typeof photoPost.hashTags !== 'object') {
                console.log('Неверный формат параметра hashTags ' + typeof photoPost.hashTags);
            }
            photoStorage[index]["hashTags"] = photoPost.hashTags;
        }
        if (photoPost.hashTags) {
            if (typeof photoPost.hashTags !== 'object') {
                console.log('Неверный формат параметра hashTags ' + typeof photoPost.hashTags);
            }
            photoStorage[index]["hashTags"] = photoPost.hashTags;
        }

        if (photoPost.likes) {
            if (typeof photoPost.likes !== 'object') {
                console.log('Неверный формат параметра likes ' + typeof photoPost.likes);
            }
            photoStorage[index]["likes"] = photoPost.likes;
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