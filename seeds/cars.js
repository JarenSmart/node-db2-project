exports.seed = async function (knex) {
  // Clear out our table
  // Truncate does more than .del(), like resetting the autoincrementing ID
  await knex("cars").truncate();

  await knex("cars").insert([
    {
      vin: "1FMDU74W05UC00000",
      make: "Ford",
      model: "Escort",
      mileage: 243456,
      transmissionType: "Automatic",
      titleStatus: "Salvage",
    },
    {
      vin: "5TEMU52N79Z597253",
      make: "Toyota",
      model: "Corolla",
      mileage: 21000,
      transmissionType: "Automatic",
      titleStatus: "Clean",
    },
    {
      vin: "5J8TB4H57GL843184",
      make: "Acura",
      model: "NSX",
      mileage: 1247,
      transmissionType: "Automatic DCT",
      titleStatus: "Missing",
    },
    {
      vin: "JHMED3652KS000618",
      make: "Honda",
      model: "Accord",
      mileage: 76534,
      transmissionType: "Automatic",
      titleStatus: "Clean",
    },
    {
      vin: "WDBED30E2PB936982",
      make: "Mercedes Benz",
      model: "W123",
      mileage: 98543,
      transmissionType: "Manual",
      titleStatus: "Stolen",
    },
  ]);
};
