'use strict';
const { hephaestus, strategies: { ARRAY, STRING, NUMBER } } = require('../index');

const schema = {
    name: [STRING.real(), STRING.not_empty()]
    , age: [NUMBER.real(), NUMBER.range_c_c([3, 9])]
};

const aegis = hephaestus.forge(schema);

const bank = aegis();

bank.name = 'xushen';
bank.age = 3;

console.log(bank);