const express = require('express');
const express = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

// database connection 
express.Mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/friends-thoughts', {
    useFriendAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// log mongo queries 
express.Mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

