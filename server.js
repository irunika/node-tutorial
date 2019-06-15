const express = require('express');
const app = express();
const port = 5000;

app.get('/api/customer', (req, res) => {
    const customers = [
        {name: "irunika", age:12},
        {name: "Anusha", age:8}
    ]

    res.json(customers);
});

app.listen(port, () => console.log(`Server started at port ${port}`));
