const sequelize = require('../config/connection');
const { User, Post } = require('../models');

// add user's data

const userdata = [
  {
    username: 'Tom',
    email: 'Tom@gmail.com',
    password: 'Tom123'
  },
  {
    username: 'Mary',
    email: 'Mary@gmail.com',
    password: 'Mary123'
  },
  {
    username: 'Irina',
    email: 'Irina@gmail.com',
    password: 'Irina123'
  },
  {
    username: 'Jonathan',
    email: 'Janathan@gmail.com',
    password: 'Jonathan123'
  },
  {
    username: 'Lev',
    email: 'Lev@gmail.com',
    password: 'Lev123'
  },
  {
    username: 'Dana',
    email: 'Dana@gmail.com',
    password: 'Dana123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
