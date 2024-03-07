const singletonConnection = require("./singletonConnection");

module.exports = (queueNameORtopicName) => {
    const serviceBusClient = singletonConnection.createServiceBusConnection();
    const senderClient = serviceBusClient.createSender(queueNameORtopicName);
    return senderClient;
}