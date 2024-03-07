const singletonConnection = require("../createConnection/singletonConnection");

const getKey = async (key) => {
    const redisClient = await singletonConnection.createRedisConnection();
    let redisResponse = await redisClient.get(key);
    console.log("Redis GET Command Response:", redisResponse);
    return redisResponse;
}

const setKey = async (key, value) => {
    const redisClient = await singletonConnection.createRedisConnection();
    let redisResponse = await redisClient.set(key, value);
    console.log("Redis SET Command Response: ", redisResponse); 
}


module.exports = {
    getKey,
    setKey
}