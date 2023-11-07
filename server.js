const express = require('express');
const studentRoutes = require('./src/students/routes');

const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!")
});

app.use('/api/v1/students', studentRoutes);

app.listen(port, () => console.log(`app listing on port ${port}`));