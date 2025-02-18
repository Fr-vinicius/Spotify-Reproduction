import dotenv from "dotenv";

dotenv.config();

const Keys = {
  User: "evfrprojetos01",
  Password_DB: process.env.DB_PASSWORD,
  Password_DB2: process.env.USER2_DB_PASSWORD,
};

export default Keys;
