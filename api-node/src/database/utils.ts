import { mongoClient } from '.';

export async function getUserByEmail(email: string) {
  const users = mongoClient.db('freecodecamp').collection('users');
  return await users.findOne({ email });
}

export async function getUserByUsername(username: string) {
  const users = mongoClient.db('freecodecamp').collection('users');
  return await users.findOne({ username });
}
