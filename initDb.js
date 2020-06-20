import { Database } from "https://deno.land/x/denodb/mod.ts";
import Food from "./models/food.js";


export default async function initDb() {
const db = new Database("postgres", {
    host: "localhost",
    username: "postgres",
    password: "z",
    database: "postgres",
    port: 5432,
  });
  
  db.link([Food]);
  
  await db.sync({ drop: true });
}
