// Simulate loading screen for 5 seconds
window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("main-interface").classList.remove("hidden");
  }, 5000); // change to 300000 for 5 minutes
};

document.getElementById("add-number").addEventListener("click", () => {
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.placeholder = "Enter Pakistani number";
  newInput.className = "number-input";
  document.getElementById("numbers").appendChild(newInput);
});

document.getElementById("send").addEventListener("click", () => {
  document.getElementById("status").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");

  setTimeout(() => {
    document.getElementById("status").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
  }, 5000); // 5 seconds fake sending, can be changed
});
