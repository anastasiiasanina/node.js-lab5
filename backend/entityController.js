const { error } = require('console');
const fs = require('fs');
const Author = require('./models/authorModel');
const BookName = require('./models/bookNameModel');
const Keyword = require('./models/keywordModel');
const handlerNames = ["authors", "bookNames", "keywords"];
const models = [Author, BookName, Keyword];

const getAllObjects = async (req, res) => {
  try {
    const { name } = req.params;
    const parameters = req.query;

    for(let i = 0; i < models.length; i++) {
      if(handlerNames[i] == name) {
        if(Object.keys(req.query).length == 1) {
          const filteredObj = await models[i].find({value: parameters.param})

          res.status(200).json(filteredObj);
        } else if (Object.keys(req.query).length == 2) {
          const allObjects = await models[i].find();
          let start = ((parameters.page - 1) * parameters.items_per_page);
          let end = start + Number(parameters.items_per_page);
          let paginatedObjects = allObjects.slice(start, end);
          
          res.status(200).json(paginatedObjects);
        } else {
          const allObjects = await models[i].find();
          res.status(200).json(allObjects);
        }
      }
    }
  } catch (error) {
    res.status(404).json({ message: 'Not found' });
  }
};

const getObject = async (req, res) => {
  try {
    const { name, id } = req.params;
    
    for(let i = 0; i < models.length; i++) {
      if(handlerNames[i] == name) {
        let obj = await models[i].findOne({_id: id});
        res.status(200).json(obj);
        break;
      }
    }
  } catch (error) {
    res.status(404).json({ message: 'Not found' });
  }
};

const deleteObject = async (req, res) => {
  try {
    const { name, id } = req.params;

    for(let i = 0; i < models.length; i++) {
      if(handlerNames[i] == name) {
        const deleted = await models[i].deleteOne({ _id: id });
        res.status(200).json(deleted);
        break;
      }
    }
  } catch (error) {
    res.status(404).json({ message: 'Not found' });
  }
};

const addObject = async (req, res) => {
  try {
    const { name } = req.params;
    const { value } = req.body;

    if(value) {
      for(let i = 0; i < models.length; i++) {
        if(handlerNames[i] == name) {
          let obj = await models[i].create(req.body);
          break;
        }
      }
      res.status(201).json('Created');
    } else throw error
    
  } catch (error) {
    res.status(404).json({ message: 'Not found' });
  }
};

const updateObject = async (req, res) => {
  try {
    const { name, id } = req.params;
    
    for(let i = 0; i < models.length; i++) {
      if(handlerNames[i] == name) {
        const obj = await models[i].findByIdAndUpdate(id, req.body);
        break;
      }
    }
    res.status(200).json("Updated");
  } catch (error) {
    res.status(404).json({ message: 'Not found' });
  }
};

module.exports = {
  getAllObjects,
  getObject,
  deleteObject,
  addObject,
  updateObject
};