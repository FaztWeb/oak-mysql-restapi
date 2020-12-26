import { search } from "../repository/user.ts";

export async function getAllUsers({ response }: { response: any }) {
  const result = await search();
  response.body = result.rows;
}
