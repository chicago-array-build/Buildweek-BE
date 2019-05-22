const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'We could not find the user' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the user' });
  }
});

router.put('/:id', async (req, res) => {
  const changes = req.body;

  if (changes.username) {
    try {
      const updated = await Users.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: 'That user does not exist',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error updating the user' });
    }
  } else {
    res.status(400).json({
      message: 'Please provide the username',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Users.remove(req.params.id);
    if (count > 0) {
      res.status(204).json({message: `${count} ${count > 1 ? 'records' : 'record'} deleted`,
    });
    } else {
      res.status(404).json({
        message: 'That user does not exist, perhaps it was deleted already',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error removing the user' });
  }
});



module.exports = router;
