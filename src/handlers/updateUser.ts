import { update } from "../repository/user.ts";
import * as doesUserExists from "../libs/doesUserExists.ts";
import { User } from "../interfaces/User.ts";

export async function updateUser({
  request,
  response,
  params,
}: {
  request: any;
  response: any;
  params: any;
}) {
  const body = await request.body();
  const user: User = await body.value;
  console.log(user);

  try {
    const userExists = await doesUserExists.findById(params.id);

    if (userExists) {
      response.status = 200;
      response.body = await update(user.name, user.country, params.id);
    } else {
      response.status = 4;
      response.body = { message: "User not found" };
    }
  } catch (error) {
    console.error(error);
  }
}
