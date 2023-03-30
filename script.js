// Estimated growth rates for PewDiePie and T-Series
const pewdiepieGrowthRate = 0.0000004;
const tseriesGrowthRate = 0.005;

// Initialize the subscriber counts for PewDiePie and T-Series
let pewdiepieCount = 111987705;
let tseriesCount = 220282362;

// Initialize the subscriber count elements for PewDiePie and T-Series
const pewdiepieNumber = document.getElementById("pewdiepie-number");
const tseriesNumber = document.getElementById("tseries-number");

// Update the subscriber counts for PewDiePie and T-Series every 1 second
setInterval(function() {
  // Estimate the new subscriber counts for PewDiePie and T-Series
  pewdiepieCount += Math.floor(pewdiepieCount * pewdiepieGrowthRate) - (Math.floor(Math.random() * (50 - 70 + 50)) + 20);
  tseriesCount += Math.floor(tseriesCount * tseriesGrowthRate);

  // Update the subscriber count elements with the new counts
  pewdiepieNumber.textContent = numberWithCommas(pewdiepieCount);
  tseriesNumber.textContent = numberWithCommas(tseriesCount);
}, 1000);

// Add commas to a number string
function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.click();