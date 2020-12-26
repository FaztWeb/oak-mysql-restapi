import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "172.17.0.2",
  username: "root",
  db: "dbusers",
  password: "faztpassword",
});

export default client;
