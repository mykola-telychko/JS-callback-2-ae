// Simple example of callbacks
function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched');
  }, 3000);
}

fetchData((data) => {
  console.log(data);
});
