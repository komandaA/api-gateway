const express = require('express');
const expressGraphQL = require('express-graphql');
import schema from './data/schema';


const app = express();

app.use(
    '/graphql',
    expressGraphQL(req => ({
        schema,
        graphiql: true,
        rootValue: {request: req},
        pretty: true,
    })),
);

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));