const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

async function connectDb() {
   try {
      const client = new Client({
         //  user: process.env.PGUSER,
         host: process.env.PGHOST,
         database: process.env.PGDATABASE,
         //  password: process.env.PGPASSWORD,
         port: process.env.PGPORT,
      });
      await client.connect();
      //   const res = await client.query("SELECT * FROM some_table");
      //   console.log(res);
      //   await client.end();
   } catch (error) {
      console.log(error);
   }
}

module.exports = { connectDb };
