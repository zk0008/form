// backend/db.js
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectToMongo() {
  try {
    await client.connect();
    db = client.db("Cluster0"); // replace with your actual DB name
    console.log("✅ Connected to MongoDB!");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

function getDb() {
  if (!db) {
    throw new Error("Database not initialized. Call connectToMongo first.");
  }
  return db;
}

module.exports = { connectToMongo, getDb };
