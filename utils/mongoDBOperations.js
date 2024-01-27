const getMongoCollection = require("../createConnection/getMongoCollection");

const findOne = async (collectionId, query, options) => {
    const collection = await getMongoCollection(collectionId);
    let result = await collection.findOne(query, options);
    return result;
}

const find = async (collectionId, query, options) => {
    const collection = await getMongoCollection(collectionId);
    let result = await collection.find(query, options).toArray();
    return result;
}

const insertOne = async (collectionId, document) => {
    const collection = await getMongoCollection(collectionId);
    let result = await collection.insertOne(document);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
}

const insertMany = async (collectionId, documents) => {
    const collection = await getMongoCollection(collectionId);
    const options = { ordered: true };
    let result = await collection.insertMany(documents, options);
    console.log(`Document inserted count: ${result.insertedCount}`);
}

const updateOne = async (collectionId, filter, updateDoc, options) => {
    const collection = await getMongoCollection(collectionId);
    let result = await collection.updateOne(filter, updateDoc, options);
    console.log(`Documents(s) matched count: ${result.matchedCount}\nUpdated document(s) count: ${result.modifiedCount}`);
}

const updateMany = async (collectionId, filter, updateDoc) => {
    const collection = await getMongoCollection(collectionId);
    let result = await collection.updateMany(filter, updateDoc);
    console.log(`Documents(s) matched count: ${result.matchedCount}\nUpdated document(s) count: ${result.modifiedCount}`);
}

const replaceOne = async (collectionId, query, replacement) => {
    const collection = await getMongoCollection(collectionId);
    let result = await collection.replaceOne(query, replacement);
    console.log(`Modified document(s) count: ${result.modifiedCount}`);
}

const deleteOne = async (collectionId, query) => {
    const collection = await getMongoCollection(collectionId);
    let result = await collection.deleteOne(query);
    console.log(`Deleted document(s) count: ${result.deletedCount}`);
}

const deleteMany = async (collectionId, query) => {
    const collection = await getMongoCollection(collectionId);
    let result = await collection.deleteMany(query);
    console.log(`Deleted document(s) count: ${result.deletedCount}`);
}

module.exports = {
    findOne,
    find,
    insertOne,
    insertMany,
    updateOne,
    updateMany,
    replaceOne,
    deleteOne,
    deleteMany
}