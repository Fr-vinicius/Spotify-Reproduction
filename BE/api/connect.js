import { MongoClient } from "mongodb";
import Keys from "../Keys.js";

const URI = `mongodb+srv://${Keys.User}:${Keys.Password_DB2}@cluster0.0vsoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);

export const db = client.db("SpotifyData");
