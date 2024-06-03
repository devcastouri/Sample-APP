// Requiring module
const express = require('express');
 
// Creating express object
const app = express();

// Middleware to parse request bodies

app.use(express.json());

// Defining get request at '/array' route 
app.get('/rates', function(req, res) { 
  res.json(
    { 
      "rates": [ 
        { 
          "service_name": "custom-standard", 
          "service_code": "CS", 
          "total_price": "1295", 
          "description": "This is the fastest option by far", 
          "currency": "USD", 
          "min_delivery_date": "2024-06-02 14:48:45 -0400", 
          "max_delivery_date": "2024-06-04 14:48:45 -0400"
        }, 
        { 
          "service_name": "custom-express", 
          "service_code": "CE", 
          "total_price": "2934", 
          "currency": "USD", 
          "min_delivery_date": "2024-06-01 14:48:45 -0400", 
          "max_delivery_date": "2024-06-02 14:48:45 -0400" 
        }
      ] 
    }
  ); 
});
  
   
// Handling GET request
app.get('/', (req, res) => { 
    res.send('A simple Node App is '
        + 'running on this server too') 
    res.end() 
}) 
 
// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));