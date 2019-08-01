const arg = process.argv[2];

const request = require('request');

const findBreedDescription = (breed, cb) => {
  request(`http://api.thecatapi.com/v1/breeds/search?q=${breed}`,(err, res, body) => {
    if (err) {
      cb(err);
      return;
    }
    const data = JSON.parse(body);
    if (data.length < 1) {
      cb("Breed not Found.");
      return;
    }
    cb(data[0].description);
  });
};

findBreedDescription(arg, (msg) => console.log(msg));