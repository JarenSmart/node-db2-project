module.exports = {
  client: "sqlite3", // Specify the DBMS
  connection: {
    filename: "./data/cars.db3", // Specify location of our database file
  },
  useNullAsDefault: true, // a flag required for SQLite3 specifically
};
