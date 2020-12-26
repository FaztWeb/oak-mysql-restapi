import { remove } from "../repository/user.ts";
import * as doesUserExists from "../libs/doesUserExists.ts";

export async function deleteUser({
  params,
  response,
}: {
  params: any;
  response: any;
}) {
  const userExists = await doesUserExists.findById(params.id);
  if (userExists) {
    response.status = 200;
    response.body = await remove(params.id);
  } else {
    response.status = 404;
    response.body = { message: "User not found" };
  }
}
