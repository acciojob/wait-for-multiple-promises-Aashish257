//your JS code here. If required.
const output = document.getElementById("output");

/* Show Loading row (TEST EXPECTS THIS ID) */
output.innerHTML = `
  <tr id="loading">
    <td colspan="2">Loading...</td>
  </tr>
`;

function createPromise() {
  const time = Math.random() * 2 + 1;
  return new Promise(resolve => {
    setTimeout(() => resolve(time), time * 1000);
  });
}

const startTime = performance.now();

Promise.all([
  createPromise(),
  createPromise(),
  createPromise()
]).then(times => {

  const loadingRow = document.getElementById("loading");
  if (loadingRow) loadingRow.remove();

  times.forEach((time, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  const totalTime = (performance.now() - startTime) / 1000;
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime.toFixed(3)}</strong></td>
  `;
  output.appendChild(totalRow);
});
