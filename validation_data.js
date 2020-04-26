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

const fruit = mongoose.model("Fruit", fruitSchema);

const apple = new fruit({
    name: 'Apple',
    rating: 9,
    riview: 'buahnya manis dan segar'
});

apple.save(function (error) {
    if (error) {
        console.log(error);

    } else {
        console.log('buah berhasil ditambahkan ke database');

    }
});