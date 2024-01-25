const express = require('express');
const router = express.Router();
const peopleService = require('./people.service');

module.exports = router;

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.post('/multiple', createMultiple);
router.put('/:id', update);
router.delete('/:id', _delete);
router.delete('/', deleteByIds);

module.exports = router;

// route functions

function getAll(req, res, next) {
  peopleService.getAll()
    .then(users => {
      console.log(users)
      res.json(users)
    })
    .catch(next);
}

function getById(req, res, next) {
  peopleService.getById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

function create(req, res, next) {
  peopleService.create(req.body)
    .then((people) => res.json({ id: people.id }))
    .catch(next);
}

function createMultiple(req, res, next) {
  peopleService.createMultiple(req.body)
    .then((summary) => res.json(summary))
    .catch(next);
}

function update(req, res, next) {
  peopleService.update(req.params.id, req.body)
    .then((people) => res.json({ id: people.id }))
    .catch(next);
}

function _delete(req, res, next) {
  peopleService.delete(req.params.id)
    .then((id) => res.json({ id: id }))
    .catch(next);
}

function deleteByIds(req, res, next) {
  peopleService.deleteByIds(req.body)
    .then((summary) => res.json(JSON.stringify(summary)))
    .catch(next);
}
