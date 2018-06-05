import {
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
} from 'graphql';

const PostType = new ObjectType({
    name: 'Post',
    fields: {
        userId: { type: StringType },
        id: { type: StringType },
        title: { type: StringType },
        body: { type: StringType },
    },
});

export default PostType;
