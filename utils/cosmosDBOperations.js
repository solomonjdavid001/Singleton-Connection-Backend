const getCosmosContainer = require("../createConnection/getCosmosContainer");

const fetchItems = async (containerId, querySpec) => {
  const containerClient = getCosmosContainer(containerId);
  const { resources: fetchedData } = await containerClient.items
    .query(querySpec)
    .fetchAll();
  return fetchedData;
};

const createItems = async (containerId, items) => {
  const containerClient = getCosmosContainer(containerId);
  if (Array.isArray(items)) {
    await Promise.all(
      items.map(async (item) => await containerClient.items.create(item))
    );
  } else {
    await containerClient.items.create(items);
  }
};

const replaceItem = async (containerId, replaceItem) => {
  const containerClient = getCosmosContainer(containerId);
  await containerClient.item(replaceItem.id).replace(replaceItem);
};

const deleteItem = async (containerId, partitionKey, itemId) => {
  const containerClient = getCosmosContainer(containerId);
  await containerClient.item(itemId, partitionKey).delete();
};

module.exports = {
  fetchItems,
  createItems,
  replaceItem,
  deleteItem,
};
