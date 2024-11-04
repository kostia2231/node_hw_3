const fs = require("fs");

fs.writeFile("info.txt", "Node.js is awesome!", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("info.txt has been updated");

  fs.readFile("info.txt", "utf8", (err, data) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("info.txt:", data);
  });
});
