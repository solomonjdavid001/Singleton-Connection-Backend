const singletonConnection = require("./singletonConnection");
const config = require("../config/config");

module.exports = async (collectionId) => {
    const mongoClient = await singletonConnection.createMongoConnection();
    const database =  mongoClient.db(config.db.mongo.databaseId);
    const collection =  database.collection(collectionId);
    return collection;
}