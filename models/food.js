import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";


export default class Food extends Model {
    static table = "food";
    static timestamps = true;
  
    static fields = {
      id: { primaryKey: true, autoIncrement: true },
      foodName: DataTypes.STRING,
      foodInfo: DataTypes.STRING,
    };
  }