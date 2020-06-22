exports.up = async function (knex) {
  //VIN, Make, Model, Mileage, Transmission type, status of the title
  await knex.schema.createTable("cars", (table) => {
    table.increments("id"); // This line is a shortcut that does exactly what the line above does
    table.text("vin").notNull().unique();
    table.text("make").notNull();
    table.text("model").notNull();
    table.integer("mileage").notNull();
    table.text("transmissionType");
    table.text("titleStatus");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
