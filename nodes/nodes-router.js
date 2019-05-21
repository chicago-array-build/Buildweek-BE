const router = require('express').Router();

const Nodes = require('./nodes-model.js');

router.get('/', (req, res) => {
    Nodes.find()
      .then(nodes => {
        res.json(nodes);
      })
      .catch(err => res.send(err));
  });

router.post('/', (req, res) => {
    let query = req.body;
  
    Nodes.add(query)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  

module.exports = router;
