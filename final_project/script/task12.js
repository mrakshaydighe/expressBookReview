const axios = require('axios');

// Function to get book details based on Author using Promise callbacks
const getBookDetailsByAuthor = (author) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://tuanhoang170-5000.theiadocker-3-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/author/${author}`)
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
getBookDetailsByAuthor('Chinua Achebe')
  .then(books => {
    console.log('Books by author:', books);
  })
  .catch(error => {
    console.error('Error getting books by author:', error);
  });