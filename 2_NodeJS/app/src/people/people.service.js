const db = require('./../../_helpers/db');
const crypto = require('crypto');

module.exports = {
  getAll,
  getById,
  create,
  createMultiple,
  update,
  delete: _delete,
  deleteByIds: deleteByIds
};

async function getAll() {
  return await db.People.findAll();
}

async function getById(id) {
  return await getPeople(id);
}

async function create(params) {
  // Create ID
  let uuid = crypto.randomUUID();
  params.id = uuid;
  console.log(params.id);
  const people = new db.People(params);
  await people.save();
  return people;
}

async function createMultiple(body) {
  var summary = {
    created: [],
    notCreated: []
  }
  for (const element of body) {
    console.log('element: ', element);
    try {
      // Create ID
      let uuid = crypto.randomUUID();
      element.id = uuid;
      console.log(element);
      const people = new db.People(element);
      await people.save();
      summary.created.push(people);
    } catch (e) {
      console.log('Error: ', e);
      let notCreated = {
        people: element,
        whay: e,
      }
      summary.notCreated.push(notCreated);
    }
  }
  return summary;
}

async function update(id, params) {
  const people = await getPeople(id);
  Object.assign(people, params);
  await people.save();
  return people;
}

async function _delete(id) {
  const people = await getPeople(id);
  await people.destroy();
  return id;
}

async function getPeople(id) {
  const people = await db.People.findByPk(id);
  if (!people) throw 'People not found';
  return people;
}

async function deleteByIds(ids) {
  var summary = {
    deleted: [],
    notFounded: []
  }
  for (const element of ids) {
    console.log(element);
    try {
      const id = await _delete(element);
      console.log('id on then: ', id);
      summary.deleted.push(id);
    } catch (e) {
      console.log(`Erro ao deletar: ${element}, `, e);
      summary.notFounded.push(element);
    }
  }
  return summary;
}