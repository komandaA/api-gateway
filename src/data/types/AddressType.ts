import {
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
} from 'graphql';


const GeoType = new ObjectType({
    name: 'Geo',
    fields: {
        lat: {type: StringType},
        lng: {type: StringType},
    },
});

const AddressType = new ObjectType({
    name: 'Address',
    fields: {
        street: {type: StringType},
        suite: {type: StringType},
        city: {type: StringType},
        zipcode: {type: StringType},
        geo: {type: GeoType},
    },
});

export default AddressType;
