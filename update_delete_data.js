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

// Fruit.updateOne({
//     _id: '5ea610aec26f7b52a087166f'
// }, {
//     name: 'Nanas'
// }, function (error) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('data buah berhasil diupdate ke Nanas');

//     }
// });

Fruit.deleteOne({
    _id: '5ea610aec26f7b52a087166f'
}, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('data buah nanas berhasil dihapus');

    }
});