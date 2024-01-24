const createConnection = require("./createConnection");

module.exports = (queueNameORtopicName) => {
    const serviceBusClient = createConnection.createServiceBusConnection();
    const sender = serviceBusClient.createSender(queueNameORtopicName);
    return sender;
}