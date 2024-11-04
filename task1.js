const fs = require("fs");

fs.mkdir("myFolder", (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log("Folder has been created");

  fs.rmdir("myFolder", (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Folder has been deleted");
  });
});
