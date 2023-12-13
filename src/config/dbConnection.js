const { Pool } = require('pg');
const dotenv = require('dotenv');

//Pattern DATABASE_URL=postgres://{db_username}:{db_password}@{host}:{port}/{db_name}
dotenv.config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
pool.on('connect', () => {
  console.log('Connect database Success');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};