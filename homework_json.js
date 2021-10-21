var data = require("./google_objects.json");
//a. Go through the items and find all results that have kind of shopping#product.
let num = 0;
for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].kind == "shopping#product") {
    num += 1;
  }
}
console.log(num);
//b. Print the title of all items with a backorder availability in inventories.
let backItem = "";
let backCount = 0;
for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.inventories[0].availability == "backorder") {
    backItem += data.items[i].product.title + " *** ";
    backCount += 1;
  }
}
console.log(backCount + " items on backorder --- " + backItem);
//c. Print the title of all items with more than one image link.
let imgItem = "";
let imgCount = 0;
for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.images.length > 1) {
    imgItem +=
      data.items[i].product.title +
      " --- has " +
      data.items[i].product.images.length +
      " images.  ";
  }
}
console.log(imgItem);
//d. Print all “Canon” products in the items (careful with case sensitivity).
