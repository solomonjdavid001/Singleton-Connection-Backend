const singletonConnection = require("./singletonConnection");

module.exports = (fileSystemName) => {
    const datalakeServiceClient = singletonConnection.createADLSGen2Connection();
    const fileSystemClient = datalakeServiceClient.getFileSystemClient(fileSystemName);
    return { datalakeServiceClient, fileSystemClient };
}