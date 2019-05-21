
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('node_queries').del()
    .then(function () {
      // Inserts seed entries
      return knex('node_queries').insert([
        {
          sensor_type: "Environmental Data",
          measure: "Temperature",
          time_period: 24,
          community_area: "Uptown"
        }
      ]);
    });
};
