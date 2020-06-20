import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './router.js';
import initDb from "./initDb.js";

initDb();

const app = new Application();

app.use(router.routes());


await app.listen("127.0.0.1:8000");