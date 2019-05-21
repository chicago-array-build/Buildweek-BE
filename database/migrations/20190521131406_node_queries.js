
exports.up = function(knex, Promise) {
    return knex.schema.createTable('node_queries', tbl => {
        tbl.increments();
    
        tbl
          .string('sensor_type', 255)
          .notNullable()

        tbl.string('measure', 255)
        .notNullable();

        tbl.integer('time_period')
        .notNullable()

        tbl.string('community_area', 255)
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('node_queries');

};
