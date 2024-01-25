const singletonConnection = require("./singletonConnection");
const config = require("../config/config");

module.exports = (collectionId) => {
    const mongoClient = singletonConnection.createMongoConnection();
    const database = mongoClient.database(config.db.mongo.databaseId);
    const collection = database.container(collectionId);
    return collection;
}