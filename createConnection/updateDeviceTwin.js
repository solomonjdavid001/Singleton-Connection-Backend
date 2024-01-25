const singletonConnection = require("./singletonConnection");

module.exports = (deviceId, patch) => {
  let registry = singletonConnection.createIoTHubRegistry();

  registry.getTwin(deviceId, (error, twin) => {
    if (error) {
      console.log(`Error while fetching device twin : ${error.constructor.name} : ${error.message}`);
    } else {
      twin.update(patch, (error) => {
        if (error) {
          console.log(`Error while updating device twin : ${error.constructor.name} : ${error.message}`);
        } else {
          console.log(twin.deviceId + " : twin updated successfully");
        }
      });
    }
  });
};
