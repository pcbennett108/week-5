var data = require("./google_objects.json");
var divider = "\n###########################################################\n";
//a. Go through the items and find all results that have kind of shopping#product.
let num = 0;
for (let i = 0; i < data.items.length; i++) {
  if (data.items[i].kind == "shopping#product") {
    num += 1;
  }
}
console.log(num);
console.log(divider);
//
//b. Print the title of all items with a backorder availability in inventories.
let backItem = "";
let backCount = 0;
for (let i = 0; i < data.items.length; i++) {
  if (data.items[i].product.inventories[0].availability == "backorder") {
    backItem += data.items[i].product.title.substring(0, 57) + "\n";
    backCount += 1;
  }
}
console.log(backCount + " items on backorder --- \n" + backItem);
console.log(divider);
//
//c. Print the title of all items with more than one image link.
let imgItem = "";
let imgCount = 0;
for (let i = 0; i < data.items.length; i++) {
  let shortProd = data.items[i].product;
  if (shortProd.images.length > 1) {
    imgItem +=
      shortProd.title.substring(0, 55) +
      " --- has " +
      shortProd.images.length +
      " images.  \n";
  }
}
console.log(imgItem);
console.log(divider);
//
//d. Print all “Canon” products in the items (careful with case sensitivity).
let brandList = "";
for (let i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand == "Canon") {
    brandList += data.items[i].product.title + "\n";
  }
}
console.log(brandList);
console.log(divider);
//
//e. Print all of the items that have an author name of “eBay” and are brand “Canon”.
let brandItems = "";
for (let i = 0; i < data.items.length; i++) {
  if (
    data.items[i].product.author.name.includes("eBay") &&
    data.items[i].product.brand == "Canon"
  ) {
    brandItems += data.items[i].product.title + "\n";
  }
}
console.log(brandItems);
console.log(divider);
//
//f. Print all products with their brand, price, and an image link.
let fullProd = "";
let spacer = " -***- ";
for (let i = 0; i < data.items.length; i++) {
  let shortProd = data.items[i].product;
  fullProd +=
    shortProd.brand +
    spacer +
    shortProd.title.substring(0, 35) +
    spacer +
    "$" +
    shortProd.inventories[0].price +
    "\n" +
    shortProd.images[0].link +
    "\n\n";
}
console.log(fullProd);
