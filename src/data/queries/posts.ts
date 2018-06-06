import fetch from 'node-fetch';

import PostType from '../types/PostType';
import {GraphQLList} from "graphql";

const posts = {
    type: new GraphQLList(PostType),
    async resolve({request}) {
        const resp_posts = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await resp_posts.json();

        const resp_users = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await resp_users.json();

        posts.forEach(post => post.user = users.find(user => user.id === post.userId));

        return (posts);
    },
};

export default posts;
