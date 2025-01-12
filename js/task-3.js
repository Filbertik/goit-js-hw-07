function getElementWidth(content, padding, border) {
  const contentValue = parseFloat(content);
  const borderDouble = 2 * parseFloat(border);
  const paddingDouble = 2 * parseFloat(padding);
  const totalData = contentValue + paddingDouble + borderDouble;
  return totalData;
}

// Виклик функції
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
