import fetch from 'node-fetch';
import {GraphQLList} from "graphql";

import UserType from '../types/UserType';

const users = {
    type: new GraphQLList(UserType),
    resolve({request}) {
        return fetch('https://jsonplaceholder.typicode.com/users').then(async resp => (await resp.json()));
    },
};

export default users;
