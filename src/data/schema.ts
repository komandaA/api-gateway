import {
    GraphQLSchema as Schema,
    GraphQLObjectType as ObjectType,
} from 'graphql';


import me from './queries/me';
import posts from "./queries/posts";

const schema = new Schema({
    query: new ObjectType({
        name: 'Query',
        fields: {
            me,
            posts
        },
    }),
});

export default schema;
