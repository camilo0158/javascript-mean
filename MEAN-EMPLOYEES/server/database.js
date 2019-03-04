const mongoose= require('mongoose');

const URI= 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('DB in connected'))
    .catch(err => console.log(err));

module.exports = mongoose;