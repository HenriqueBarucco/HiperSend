import mongoose from "mongoose";
import getenv from "getenv";

const STRING_DB = "mongodb+srv://henrique:henrique123@alura.nbs5d7c.mongodb.net/hipersend"//getenv("STRING_DB");

mongoose.connect(STRING_DB);

let db = mongoose.connection;

export default db;