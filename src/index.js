const express = require('express');
const dotenv = require('dotenv');

// Загрузка переменных окружения из .env файла
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Маршруты
const sharesRoute = require('./shares/routes');
app.use('/', sharesRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
