import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_URL,
    // port: 5434,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE
  },
  useNullAsDefault: true,
})

export default db;