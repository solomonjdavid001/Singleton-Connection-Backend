const createConnection = require("./createConnection");
const config = require("../config/config");

module.exports = (containerId) => {
    const cosmosClient = createConnection.createCosmosConnection();
    const database = cosmosClient.database(config.db.cosmos.databaseId);
    const container = database.container(containerId);
    return container;
}