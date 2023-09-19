const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

// Read the JSON data from your file
const jsonData = fs.readFileSync('mobile.json', 'utf8');
const data = JSON.parse(jsonData);

// Define a function to insert data into the database
const insertDataIntoDatabase = async () => {
  for (const item of data) {
    try {
      // Create a new record in the database for each item in the JSON data
      await prisma.product.create({
        data: {
          name: item.name,
          price: item.price,
          image: item.image,
          desc: item.description,
        },
      });
    } catch (error) {
      console.error(`Error inserting data: ${error.message}`);
    }
  }
};

// Call the function to insert data
insertDataIntoDatabase()
  .then(() => {
    console.log('Data inserted into the database successfully.');
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  })
  .finally(async () => {
    await prisma.$disconnect(); // Disconnect from the database when done
  });
