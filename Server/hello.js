// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const cors = require('cors');
// const {prisma}=require('./db');
// const { PrismaClient } = require('@prisma/client');
// const app = express();
// const port = 4001;

// app.use(bodyParser.json());

// // Enable CORS for your frontend URL
// app.use(cors({
//   origin: 'http://localhost:3000',
// }));

// // Read the JSON file containing your data
// const jsonData = JSON.parse(fs.readFileSync('mobile.json', 'utf8'));

// // GET endpoint to fetch all data
// app.get('/api/data',async (req, res) => {
//   try{
//     const pris=new PrismaClient();
//     const data=await pris.product.findMany();
//     res.json(data);
//   }catch(error){
//     res.json({error:error.message});
//   }
// });

// // POST endpoint to add new data
// app.post('/api/data', async(req, res) => {
//   const pris = new PrismaClient();
//   try{
//     await pris.product.create({
//       data: req.body,
//     });
//   }catch(error){
//     res.json({error:error.message});
//   }

// });

// // PUT endpoint to update existing data by ID
// app.put('/api/data/:id',async (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   const pris = new PrismaClient();

//   try{
//     await pris.product.update({
//       where: {
//         id: Number(id),
//       },
//       data: updatedData,
//     });
//     res.json({ message: 'Data updated' });
//   }
//   catch(error){
//     res.json({error:error.message});
//   }
// });

// // DELETE endpoint to remove data by ID
// app.delete('/api/data/:id', async(req, res) => {
//   const prisma=new PrismaClient();
//   const id = req.params.id;
//   try{
//     await prisma.product.delete({
//       where: {
//         id: Number(id),
//       },
//     });
//     res.send({ message: 'Data deleted' });
//   }
//   catch(error){
//     res.send({ error: error.message });
//   }


// });
// app.listen(port, () => {
//   console.log(`Server listening on http://localhost:${port}`);
// }
// );


const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const app = express();
const port = 4001;

app.use(bodyParser.json());

// Enable CORS for your frontend URL
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Create a single instance of the Prisma Client
const prisma = new PrismaClient();

// GET endpoint to fetch all data
app.get('/api/data', async (req, res) => {
  try {
    const data = await prisma.product.findMany();
    res.json(data);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// POST endpoint to add new data
app.post('/api/data', async (req, res) => {
  try {
   const mobile = await prisma.product.create({
      data: req.body,
    });
    res.status(200).json({
      message: mobile,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// PUT endpoint to update existing data by ID
app.put('/api/data/:id', async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: updatedData,
    });
    res.json({ message: 'Data updated' });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// DELETE endpoint to remove data by ID
app.delete('/api/data/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ message: 'Data deleted' });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
