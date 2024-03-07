const getSBQSender = require("../createConnection/getSBQSender");

const sendMessages = async (queueName_OR_topicName, messages) => {
  const senderClient = getSBQSender(queueName_OR_topicName);
  await senderClient.sendMessages(messages);
};

module.exports = {
  sendMessages,
};
