const express = require('express')
const path = require('path')
const userRoutes = require('./routes/userRoutes');
const sneakerRoutes = require('./routes/sneakerRoutes');
const installRoute = require('./routes/installRoute');
const authRoute = require('./routes/authRoute');
const adminRoutes = require('./routes/adminRoute');
const { swaggerDocs, swaggerUi } = require('./swagger');
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = [
  './app.js', 
  './routes/userRoutes.js', 
  './routes/sneakerRoutes.js', 
  './routes/installRoute.js', 
  './routes/authRoute.js', 
  './routes/adminRoute.js'
]

const app = express()
const port = 3000

app.use(express.json());

//--------------------------------------------AUTH-----------------------------------------------
app.use('/auth', authRoute);

//--------------------------------------------ADMIN----------------------------------------------
app.use('/admin', adminRoutes);

//--------------------------------------------USER-----------------------------------------------
app.use('/user', userRoutes);

//--------------------------------------------SNEAKER--------------------------------------------
app.use('/sneaker', sneakerRoutes);

//--------------------------------------------INSTALL--------------------------------------------
app.use('/install', installRoute);

//--------------------------------------------SWAGGER--------------------------------------------
swaggerAutogen(outputFile, endpointsFiles).then(() => {
  const swaggerDocs = require('./swagger_output.json'); // Carrega o arquivo gerado
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
  });
});

require('./config/db');