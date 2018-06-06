import {
    GraphQLSchema as Schema,
    GraphQLObjectType as ObjectType,
} from 'graphql';


import users from './queries/users';
import posts from "./queries/posts";

const schema = new Schema({
    query: new ObjectType({
        name: 'Query',
        fields: {
            users,
            posts
        },
    }),
});

export default schema;
