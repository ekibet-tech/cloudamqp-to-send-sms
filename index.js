const express = require('express'); 
const { json, urlencoded } = express; 
const app = express(); 
app.use(json());
app.use(urlencoded({ extended: true }));  
app.get('/', (req, res) => {    


  return res.status(200).send({  
   message: 'Welcome to our API' 


     }) 

    });


app.listen(5000, () => {    
  console.log(`app running on port: 5000`);

   });