import { insert } from "../repository/user.ts";
import { User } from "../interfaces/User.ts";

export async function addUser({
  request,
  response,
}: {
  request: any;
  response: any;
}) {
  const body = await request.body();
  const user: User = await body.value; // a json object
  console.log(user);

  if (user.hasOwnProperty("name") && user.hasOwnProperty("country")) {
    response.body = 200;
    response.body = await insert(user);
  } else {
    response.body = { message: "Invalid Request" };
    response.status = 400;
  }
}
