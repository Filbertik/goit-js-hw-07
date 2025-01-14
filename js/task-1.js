const catList = document.querySelector("#categories");
const catItems = catList.querySelectorAll(".item");
console.log(`Number of categories: ${catItems.length}`);

catItems.forEach((item) => {
  const catTitle = item.querySelector("h2").textContent;
  const liulCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${catTitle}`);
  console.log(`Elements: ${liulCount}`);
});
