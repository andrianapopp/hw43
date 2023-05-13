function table() {
  let someTable = document.getElementById("mainTable");
  let toHtml = ''

  for (let i = 0; i < 10; i++) {
    let start = "<tr>";
    for (let k = 0; k < 10; k++) {
      let windowInput = i * 10 + k + 1;
      let windowApp = '<td class = "table-cel">${windowInput}</td>';
      start += windowApp;
    }
    start += '</td>';
    toHtml += start
  }
  someTable.innerHTML = toHtml
}
table()