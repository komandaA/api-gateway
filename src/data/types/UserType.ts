import {
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
} from 'graphql';

import AddressType from "./AddressType";

const UserType = new ObjectType({
    name: 'User',
    fields: {
        id: {type: StringType},
        name: {type: StringType},
        username: {type: StringType},
        email: {type: StringType},
        address: {type: AddressType},
        phone: {type: StringType},
        website: {type: StringType},
    },
});

export default UserType;
