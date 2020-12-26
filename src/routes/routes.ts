import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAllUsers } from "../handlers/getAllUsers.ts";
import { getUser } from "../handlers/getUser.ts";
import { addUser } from "../handlers/addUser.ts";
import { deleteUser } from "../handlers/deleteUser.ts";
import { updateUser } from "../handlers/updateUser.ts";

const router = new Router();

router
  .get("/users", getAllUsers)
  .get("/users/:id", getUser)
  .post("/users", addUser)
  .delete("/users/:id", deleteUser)
  .put("/users/:id", updateUser);

export default router;
