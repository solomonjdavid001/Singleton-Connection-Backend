const getSBQSender = require("../createConnection/getSBQSender");

const sendMessages = async (queueNameORtopicName, messages) => {
  const senderClient = getSBQSender(queueNameORtopicName);
  await senderClient.sendMessages(messages);
};

module.exports = {
  sendMessages,
};
