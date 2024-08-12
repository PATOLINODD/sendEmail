
// (async () => {
//   try {
    
//     await db.run(`
//       CREATE TABLE IF NOT EXISTS DOR_CLIENTE (
//         clientID INTEGER PRIMARY KEY AUTOINCREMENT,
//         firstName varchar(50) not null,
//         lastName varchar(50) not null,
//         phone varchar(16) not null,
//         email varchar(255) UNIQUE not null,
//         companyName varchar(255) not null,
//         description text not null,
//         requestDate datetime not null
//       )
//    `);
//   //  await db.run("DROP TABLE DOR_CLIENTE");
//         console.log("TABLE DOR_CLIENTE CREATED!");
//         await db.close(err =>{
//           if(err){
//             console.error(err);
//           }
//         });
//     } catch (error) {
//       console.error(error);
//     }
// })();

// module.exports = { dbPath };
