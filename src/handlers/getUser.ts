import { search } from "../repository/user.ts";
import * as doesUserExists from "../libs/doesUserExists.ts";

export async function getUser({
  params,
  response,
}: {
  params: any;
  response: any;
}) {
  try {
    console.log(params);
    const userExists = await doesUserExists.findById(params.id);

    if (userExists) {
      const result = await search(params);
      response.status = 200;
      response.body = result.rows;
    } else {
      response.status = 404;
      response.body = { message: "User not found" };
    }
  } catch (error) {
    console.log(error);
  }
}
