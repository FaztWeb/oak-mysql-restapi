import client from "../db.ts";

interface Params {
  id?: any;
}

export async function search(params: Params = {}) {
  const isSpecific = Object.keys(params).length !== 0;
  if (!isSpecific) {
    return await client.execute(`SELECT * FROM user`);
  } else {
    return await client.execute(`SELECT * FROM user WHERE id = ?`, [params.id]);
  }
}

// Insert a new Row
interface InsertParams {
  name: string;
  country: string;
}

export async function insert({ name, country }: InsertParams) {
  return await client.execute(`INSERT INTO user(name, country) values(?, ?)`, [
    name,
    country,
  ]);
}

// Update a Row
interface UpdateParams {
  name: string;
  country: string;
  id: string;
}
export async function update(name: string, country: string, id: string) {
  return await client.execute(
    `UPDATE user SET name = ?, country = ? WHERE id = ?`,
    [name, country, id]
  );
}

// Delete a Row
export async function remove(id: string) {
  return await client.execute(`DELETE FROM user WHERE id = ?`, [id]);
}
