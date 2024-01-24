const createConnection = require("./createConnection");
const config = require("../config/config");

module.exports = (collectionId) => {
    const mongoClient = createConnection.createMongoConnection();
    const database = mongoClient.database(config.db.mongo.databaseId);
    const collection = database.container(collectionId);
    return collection;
}