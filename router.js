import { Router } from "https://deno.land/x/oak/mod.ts";
import Food from "./models/food.js";

const router = new Router();

async function writeToDb(data) {
    console.log(data);
  await Food.create({
    foodName: data.value.name,
    foodInfo: data.value.info,
  });

  const dbdata = await Food.all();
  console.log(dbdata);
}

router.post("/", async (ctx) => {
  const body = await ctx.request.body();
  writeToDb(body);
  ctx.response.body = "aa";
});

export default router;
