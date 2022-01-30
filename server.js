const express = require('express');
//add port desgnation
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//express middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/',htmlRoutes)


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})