const singletonConnection = require("../createConnection/singletonConnection");

const setKey = async (key, value) => {
    const redisClient = await singletonConnection.createRedisConnection();
    let redisResponse = await redisClient.set(key, value);
    console.log("Redis SET Command Response: ", redisResponse); 
}

const getKey = async (key) => {
    const redisClient = await singletonConnection.createRedisConnection();
    let redisResponse = await redisClient.get(key);
    console.log("Redis GET Command Response:", redisResponse);
    return redisResponse;
}

module.exports = {
    setKey,
    getKey
}