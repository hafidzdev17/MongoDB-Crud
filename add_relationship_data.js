const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_mongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'data name harus diisi']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    riview: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);


const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'data name harus diisi']
    },
    age: {
        type: Number
    },
    favoriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const durian = new Fruit({
    name: 'durian',
    rating: 10,
    riview: 'buahnya manis dan nikmat'
});

durian.save(function (error) {
    if (error) {
        console.log(error);

    } else {
        console.log('buah berhasil ditambahkan ke database');

    }
});

// create people
const people = new People({
    name: 'Hafidz',
    age: 21,
    favoriteFruit: durian
});

people.save(function (error) {
    if (error) {
        console.log(error);

    } else {
        console.log('berhasil create hafidz relasinya dengan durian');

    }
});