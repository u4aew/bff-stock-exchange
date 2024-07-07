const express = require('express');
const dotenv = require('dotenv');

// Загрузка переменных окружения из .env файла
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Маршруты
const sharesRoute = require('./shares/routes');
const footerRoute = require('./footer/routes');

app.use('/shares', sharesRoute);
app.use('/footer', footerRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
