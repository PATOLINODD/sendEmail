const sqlite3Offline = require("sqlite3-offline-next").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "aib2business.db");
const db = new sqlite3Offline.Database(dbPath, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("CONNECTED TO DATABASE");
  }
});
(async () => {
  try {
    
    await db.run(`
      CREATE TABLE IF NOT EXISTS DOR_CLIENTE (
        clientID INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName varchar(50) not null,
        lastName varchar(50) not null,
        phone varchar(16) not null,
        email varchar(255) UNIQUE not null,
        companyName varchar(255) not null,
        description text not null,
        requestDate datetime not null
      )
   `);
  //  await db.run("DROP TABLE DOR_CLIENTE");
        console.log("TABLE DOR_CLIENTE CREATED!");
    } catch (error) {
      console.error(error);
    }
})();

module.exports = { db };
