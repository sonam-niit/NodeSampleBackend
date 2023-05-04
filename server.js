const express = require('express');
const PORT=5000;

const app= express();

app.use(express.json());
app.use("/api/user",require('./routes/user_route'));

app.listen(PORT,()=>{
    console.log(`Express server running on port ${PORT}`)
})