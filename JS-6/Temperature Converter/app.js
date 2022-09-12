// Select all required elements
const far = document.getElementById("far");
const cel = document.getElementById("cel");

far.addEventListener("input", function () {
  const farTemp = far.value;
  const celcius = ((Number(farTemp) - 32) * 5) / 9;
  cel.value = celcius;
  // (98°F − 32) × 5/9
});

cel.addEventListener("input", function () {
  const celTemp = cel.value;
  const farenhiet = (Number(celTemp) * 9) / 5 + 32;
  far.value = farenhiet;
  // (96.8°C × 9/5) + 32
});
