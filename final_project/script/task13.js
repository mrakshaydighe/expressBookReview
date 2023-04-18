const axios = require('axios');

// Function to get book details based on Title using Promise callbacks
const getBookDetailsByTitle = (title) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://tuanhoang170-5000.theiadocker-3-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/title/${title}`)
      .then(response => {
        // Extract book details from response
        const books = response.data;
        resolve(books);
      })
      .catch(error => {
        // Handle error
        reject(error);
      });
  });
};

// Usage
getBookDetailsByTitle('Things Fall Apart')
  .then(books => {
    console.log('Books by title:', books);
  })
  .catch(error => {
    console.error('Error getting books by title:', error);
  });