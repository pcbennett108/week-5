let menu = {
  Snickers: 100,
  Gushers: 50,
  Gum: 25,
  PotatoChips: 150,
  Soda: 200,
  Water: 100,
};
for (const property in menu) {
  console.log(`${property} - ${menu[property]}`);
}
