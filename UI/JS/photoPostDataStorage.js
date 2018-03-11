var photoPostDataStorage = (function () {
    var photoStorage = [
        {
            id: '1',
            description: 'Закат – это своеобразный итог дня. Заход солнца говорит о том, что день подходитк концу. В отличие от бодрого и оптимистического рассвета, закат наполнен романтикой и таинственностью...',
            createdAt: new Date('2018-03-01T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/01.jpg',
            hashTags: ['#вечер', '#закат', '#романтика'],
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
            hashTags: ['#зима', '#холодно', '#солнце'],
            likes: []
        },
        {
            id: '4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
            createdAt: new Date('2018-03-07T23:00:00'),
            author: 'Mariya Selitskaya',
            photoLink: 'images/04.jpg',
            hashTags: [],
            likes: ['Ivanovne']
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

    function getPhotoPosts() {
        return photoStorage;
    }
    
    return {
        getPhotoPosts: getPhotoPosts
    }
})();
