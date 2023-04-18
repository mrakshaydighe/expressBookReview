const axios = require('axios');

// Function to get book details based on ISBN using Promise callbacks
const getBookDetailsByISBN = (isbn) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://tuanhoang170-5000.theiadocker-3-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/isbn/${isbn}`)
      .then(response => {
        // Extract book details from response
        const book = response.data;
        resolve(book);
      })
      .catch(error => {
        // Handle error
        reject(error);
      });
  });
};

// Usage
getBookDetailsByISBN('1')
  .then(book => {
    console.log('Book details:', book);
  })
  .catch(error => {
    console.error('Error getting book details:', error);
  });