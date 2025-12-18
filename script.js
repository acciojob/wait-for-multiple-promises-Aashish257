//your JS code here. If required.
const output = document.getElementById("output");

/* 1️⃣ Show default Loading row */
output.innerHTML = `
  <tr>
    <td colspan="2">Loading...</td>
  </tr>
`;

/* 2️⃣ Function to create a promise with random delay (1–3 seconds) */
function createPromise() {
  const time = Math.random() * 2 + 1; // 1 to 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

/* 3️⃣ Create three promises */
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

/* Start total time measurement */
const startTime = performance.now();

/* 4️⃣ Wait for all promises */
Promise.all([promise1, promise2, promise3]).then((times) => {
  const endTime = performance.now();
  const totalTime = (endTime - startTime) / 1000;

  /* Remove Loading row */
  output.innerHTML = "";

  /* Populate promise rows */
  times.forEach((time, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;

    output.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime.toFixed(3)}</strong></td>
  `;

  output.appendChild(totalRow);
});
