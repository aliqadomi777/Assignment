/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "URL",
      message: "Enter your URL",
    },
  ])
  .then((answers) => {
    const qr_image = qr.image(answers.URL, { type: "png" });
    qr_image.pipe(fs.createWriteStream("qr_image.png"));
    fs.writeFile("URL.txt", answers.URL, (err) => {
      if (err) throw err;
      console.log("I hate niggas");
    });
  })
  .catch((error) => {
    console.error("I also hate niggas", error);
  });
