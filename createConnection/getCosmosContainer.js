const singletonConnection = require("./singletonConnection");
const config = require("../config/config");

module.exports = (containerId) => {
    const cosmosClient = singletonConnection.createCosmosConnection();
    const database = cosmosClient.database(config.db.cosmos.databaseId);
    const container = database.container(containerId);
    return container;
}