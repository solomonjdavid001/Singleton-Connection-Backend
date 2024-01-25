const singletonConnection = require("./singletonConnection");

module.exports = (queueNameORtopicName) => {
    const serviceBusClient = singletonConnection.createServiceBusConnection();
    const sender = serviceBusClient.createSender(queueNameORtopicName);
    return sender;
}