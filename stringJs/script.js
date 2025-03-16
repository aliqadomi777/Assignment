//-1-
let s1 = "aaaa";
//first check
console.log(s1.length > 280);

for (let x = 0; x < 300; x++) {
  s1 = s1 + "a";
}
//second check
console.log(s1.length > 280);

console.log(
  "-----------------------------------------------------------------------"
);
//-2- + -4- + -6-
let name1 = "ali obaidallah";
if (name1.charAt(0) !== name1.charAt(0).toUpperCase()) {
  console.log(name1.charAt(0).toUpperCase() + name1.slice(1));
}
console.log(
  "-----------------------------------------------------------------------"
);
//-5-
let email = "  ali_obaidallah@gmail.com     ";
console.log(email.length);
console.log(email.trimEnd().length);
console.log(email.trimStart().length);
email = email.trim();
console.log(email.length);
console.log(email);

console.log(
  "-----------------------------------------------------------------------"
);

//-7- + -8-
//u mean mask like make them (*) ??
let phone = "0788767058";
console.log(phone.substring(0, 6).replace(/./g, "*") + phone.substring(6));

console.log(
  "-----------------------------------------------------------------------"
);
//-9- + -10-
let comment =
  "Wow, this is really impressive! I love the attention to detail. shit Keep up the great work!";
comment = comment.split(" ");
//console.log(comment.toString());
if (comment.includes("shit")) {
  console.log("bad word");
}

console.log(
  "-----------------------------------------------------------------------"
);

//-11-
let directory = "cat.jpg";
console.log(directory.endsWith("jpg"));

console.log(
  "-----------------------------------------------------------------------"
);
//-12-
let nameRepeat = "samir";
console.log(nameRepeat.repeat(10));

console.log(
  "-----------------------------------------------------------------------"
);

//-13-
let s2 = "the ";
let s3 = "metro";
console.log(s2.concat(s3));

console.log(
  "-----------------------------------------------------------------------"
);

//-14-

let para =
  "Bali is predominantly a Hindu country. Bali is known for its elaborate, traditional dancing. The dancing is inspired by its Hindi beliefs. Most of the dancing portrays tales of good versus evil. To watch the dancing is a breathtaking experience. Lombok has some impressive points of interest – the majestic Gunung Rinjani is an active volcano. It is the second highest peak in Indonesia. Art is a Balinese passion. Batik paintings and carved statues make popular souvenirs. Artists can be seen whittling and painting on the streets, particularly in Ubud. It is easy to appreciate each island as an attractive tourist destination. Majestic scenery; rich culture; white sands and warm, azure waters draw visitors like magnets every year. Snorkelling and diving around the nearby Gili Islands is magnificent. Marine fish, starfish, turtles and coral reef are present in abundance. Bali and Lombok are part of the Indonesian archipelago. Bali has some spectacular temples. The most significant is the Mother Temple, Besakih. The inhabitants of Lombok are mostly Muslim with a Hindu minority. Lombok remains the most understated of the two islands. Lombok has several temples worthy of a visit, though they are less prolific. Bali and Lombok are neighbouring islands.";

console.log(para.indexOf("is"));
console.log(para.lastIndexOf("is"));
