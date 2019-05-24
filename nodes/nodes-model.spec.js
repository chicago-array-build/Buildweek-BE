const db = require('../database/dbConfig')
const Nodes = require('./nodes-model')

describe('insert()', () => {
    afterEach(async () => {
        await db('node_queries').truncate()
    })

    it('should add the created node query', async () => {
        const { id } = await Nodes.add(
            {
                "sensor_type": "Sensor Type 1",
                "measure": "Measure 1",
                "time_period": "last 7 days",
                "community_area": "all"
            }
        )
        //

        const nodes = await db('node_queries').where({ id })

        expect(nodes.length).toBeTruthy()
    })

    it('should add the correct node query provided', async () => {
        afterEach(async () => {
            await db('node_queries').truncate()
        })

        let query = await Nodes.add(
            {
                "sensor_type": "Sensor Type 1",
                "measure": "Measure 1",
                "time_period": "last 7 days",
                "community_area": "all"
            }
            )
        expect(query.sensor_type).toBe('Sensor Type 1')
  
        // query = await Nodes.add(
        //     {
        //         "sensor_type": "Sensor Type 2",
        //         "measure": "Measure 1",
        //         "time_period": "last 7 days",
        //         "community_area": "all"
        //     })
        // expect(query.sensor_type).toBe('Sensor Type 2')
  
        const nodes = await db('node_queries')
  
        expect(nodes).toHaveLength(1)
      })

      it('added query should have the required fields', async () => {
        afterEach(async () => {
            await db('node_queries').truncate()
        })

        let query = await Nodes.add(
            {
                "sensor_type": "Sensor Type 1",
                "measure": "Measure 1",
                "time_period": "last 7 days",
                "community_area": "all"
            }
        );

        expect(query).toHaveProperty('sensor_type')
        expect(query).toHaveProperty('measure')
        expect(query).toHaveProperty('time_period')
        expect(query).toHaveProperty('community_area')
        expect(query).toHaveProperty('url')
    });   
})