import { getDatabase, ref, set } from "firebase/database";
import { argon2id } from "argon2";

export default async function createUser(userId, name, email, password) {
    const db = getDatabase();
    set(ref(db, '/users/' + userId), {
      username: name,
      email: email,
      password: await argon2id.hash(password)
    });
  };