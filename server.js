const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

// database connection 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/friends-thoughts', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// log mongo queries 
mongoose.set('debug', true);

// port connection
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

