//npm
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

//port
const PORT = require('./port');

//schema
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
