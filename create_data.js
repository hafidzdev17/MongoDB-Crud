const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_mongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    riview: String
});

const fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new fruit({
//     name: 'Apple',
//     rating: 9,
//     riview: 'buahnya manis dan segar'
// });

// apple.save(function (error) {
//     if (error) {
//         console.log(error);

//     } else {
//         console.log('buah berhasil ditambahkan ke database');

//     }
// });

const kiwi = new fruit({
    name: 'kiwi',
    rating: 7,
    riview: 'buah yang segar dan terbaik'
});
const mangga = new fruit({
    name: 'mangga',
    rating: 10,
    riview: 'buahnya menarik untuk dimakan'
});
const jeruk = new fruit({
    name: 'jeruk',
    rating: 6,
    riview: 'buahnya asam manis untuk dicoba'
});
const pisang = new fruit({
    name: 'pisang',
    rating: 8,
    riview: 'buahnya manis dan empuk'
});


fruit.insertMany([
    pisang,
    kiwi,
    mangga,
    jeruk
], function (error) {
    if (error) {
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log('buah berhasil ditambakan ke database');

    }
});