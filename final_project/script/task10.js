// Import Axios library
const axios = require('axios');

// Function to get list of books using async-await
const getBooks = async () => {
  try {
    const response = await axios.get('https://tuanhoang170-5000.theiadocker-3-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/');
    // Extract book data from response
    const books = response.data;
    return books; // Return books array
  } catch (error) {
    throw error; // Throw error object
  }
};

// Usage of getBooks function with async-await
(async () => {
  try {
    const books = await getBooks();
    console.log('Books:', books);
  } catch (error) {
    console.error('Error:', error);
  }
})();




