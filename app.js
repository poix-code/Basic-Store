const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);


app.use('/', (req, res, next) => {
    res.status(400).render('404', { pageName: 'Not Found' });
});

app.listen(3000);