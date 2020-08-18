import knex from 'knex';

let db = {};

(async () => {
  try {
    db = knex({
      client: 'pg',
      connection: {
        host: process.env.DATABASE_URL,
        // port: 5434,
        // user: process.env.DB_USER,
        // password: process.env.DB_PASSWORD,
        // database: process.env.DB_DATABASE
      },
      useNullAsDefault: true,
    });
  } catch(err){
    console.log('Erro ao realizar conexão ao BD: ', err);
  }
})();

export default db;