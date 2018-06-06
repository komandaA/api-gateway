import {
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
} from 'graphql';
import UserType from "./UserType";

const PostType = new ObjectType({
    name: 'Post',
    fields: {
        user: { type: UserType },
        id: { type: StringType },
        title: { type: StringType },
        body: { type: StringType },
    },
});

export default PostType;
