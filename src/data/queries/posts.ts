import fetch from 'node-fetch';

import PostType from '../types/PostType';
import {GraphQLList} from "graphql";

const posts = {
    type: new GraphQLList(PostType),
    resolve({request}) {
        return fetch('https://jsonplaceholder.typicode.com/posts').then(async resp => {
            const users = await resp.json();

            return (users);
        });

    },
};

export default posts;
