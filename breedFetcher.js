// const arg = process.argv[2];

// const request = require('request');

// const findBreedDescription = (breed, cb) => {
//   request(`http://api.thecatapi.com/v1/breeds/search?q=${breed}`,(err, res, body) => {
//     if (err) {
//       cb(err);
//       return;
//     }
//     const data = JSON.parse(body);
//     if (data.length < 1) {
//       cb("Breed not Found.");
//       return;
//     }
//     cb(data[0].description);
//   });
// };

// findBreedDescription(arg, (msg) => console.log(msg));

const request = require('request');

const breedName = process.argv[2];

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
  
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
  
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Failed to find breed ${breedName}`, null);
    }
  });
};

module.exports = { fetchBreedDescription };