import { MongoClient } from 'mongodb';
import { logover } from '../logger';

const URI = process.env.MONGOHQ_URL || 'mongodb://localhost:27017/freecodecamp';

export const mongoClient = new MongoClient(URI);

export async function connect() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await mongoClient.connect();
    // Establish and verify connection
    await mongoClient.db('freecodecamp').command({ ping: 1 });
    logover.info('Connected successfully to database');
  } catch (e) {
    logover.error(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoClient.close();
  }
}
