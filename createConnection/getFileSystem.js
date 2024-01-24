const createConnection = require("./createConnection");

module.exports = (fileSystemName) => {
    const datalakeServiceClient = createConnection.createADLSGen2Connection();
    const fileSystemClient = datalakeServiceClient.getFileSystemClient(fileSystemName);
    return { datalakeServiceClient, fileSystemClient };
}