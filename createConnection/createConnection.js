const config = require("../config/config");
const { CosmosClient } = require("@azure/cosmos");
const { createClient } = require("redis");
const { DataLakeServiceClient } = require("@azure/storage-file-datalake");
const { MongoClient } = require("mongodb");
const { ServiceBusClient } = require("@azure/service-bus");
const { endpoint, key } = config.db.cosmos;
const { serverName, authPass } = config.db.redis;

const createCosmosConnection = (() => {
  let cosmosClient;

  return () => {
    if (!cosmosClient) {
      console.log("Initalizing cosmosClient");
      cosmosClient = new CosmosClient({ endpoint, key });
    }
    return cosmosClient;
  };
})();

const createRedisConnection = (() => {
  let redisClient;

  return async () => {
    try {
      if (!redisClient) {
        console.log("Intializing redisClient");
        redisClient = createClient({
          // url: `rediss://${serverName}:6380`,
          // password: authPass
        });
        await redisClient.connect();
      }
      return redisClient;
    } catch (error) {
      console.log("Error while initializing redisClient", error);
    }
  };
})();

const createADLSGen2Connection = (() => {
  let datalakeServiceClient;

  return () => {
    if (!datalakeServiceClient) {
      console.log("Initializing datalakeServiceClient");
      datalakeServiceClient = DataLakeServiceClient.fromConnectionString(
        config.db.adlsGen2.connectionString
      );
    }
    return datalakeServiceClient;
  };
})();

const createMongoConnection = (() => {
  let mongoClient;

  return () => {
    if (!mongoClient) {
      console.log("Initializing mongoClient");
      mongoClient = new MongoClient(config.db.mongo.connectionString);
    }
    return mongoClient;
  };
})();

const createServiceBusConnection = (() => {
  let serviceBusClient;

  return () => {
    if(!serviceBusClient) {
      console.log("Initializing serviceBusClient");
      serviceBusClient = new ServiceBusClient(config.serviceBus.connectionString);
    }
    return serviceBusClient;
  }
})();

module.exports = {
  createCosmosConnection,
  createRedisConnection,
  createADLSGen2Connection,
  createMongoConnection,
  createServiceBusConnection
};
