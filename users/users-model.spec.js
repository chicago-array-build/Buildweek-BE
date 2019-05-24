const db = require('../database/dbConfig')
const Users = require('./users-model')

describe('insert()', () => {
    afterEach(async () => {
        await db('users').truncate()
    })

    it('should add the created user', async () => {
        const { id } = await Users.add({
            "username" : "user 3",
            "password" : "password 3"
        })
        //

        const users = await db('users').where({ id })

        expect(users.length).toBeTruthy()
    })
    //

    it('should add the correct user provided', async () => {
        afterEach(async () => {
            await db('users').truncate()
        })

        let user = await Users.add({ username: 'user 4', password: 'password 4' })
        expect(user.username).toBe('user 4')
  
        user = await Users.add({ username: 'user 5', password: 'password 5' })
        expect(user.username).toBe('user 5')
  
        const users = await db('users')
  
        expect(users).toHaveLength(2)
      })

      it('added user should have the required fields', async () => {
        afterEach(async () => {
            await db('users').truncate()
        })

        let user = await Users.add({ username: 'user', password: 'password' });

        expect(user).toHaveProperty('username')
        expect(user).toHaveProperty('password')

    });   
})