
const users = [{
    id: '1',
    name: 'Firdovsi',
    email: 'r-firdovsi@hotmail.com',
    age: 21
}, {
    id: '2',
    name: 'Tamerlan',
    email: 'tamerlan@mail.ru',
    age: 27
}];

const posts = [{
    id: '21',
    title: 'History of Lenovo',
    body: 'Lenovo the best and very big company',
    published: 2016,
    author: '1'
}, {
    id: '20',
    title: 'History of Laravel',
    body: 'Laravel Best PHP Framework',
    published: 2019,
    author: '2'
}, {
    id: '19',
    title: 'GraphQL The Best',
    body: 'GraphQL very fast and useful way work with data',
    published: 2019,
    author: '1'
}];

const comments = [
    {
        id: '25',
        text: 'The best course',
        author: '2',
        post: '21'
    },
    {
        id: '65',
        text: 'Yes okey you true',
        author: '1',
        post: '20'
    },
    {
        id: '12',
        text: 'First Comments',
        author: '2',
        post: '19'
    }
];

const db = {
    users,
    posts,
    comments
};

export { db as default }

