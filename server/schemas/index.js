// collect the other two files and export them (typeDefs.js & resolvers.js)

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };