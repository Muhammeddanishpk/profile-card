const toggleBtn = document.getElementById("toggle");
const profile = document.getElementById("profile");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("text-gray-900")) {
    toggleBtn.innerHTML = "🌙";
    body.classList.remove("text-gray-900");
    body.classList.add("text-gray-100");
    profile.classList.remove("bg-slate-200");
    profile.classList.add("bg-gray-900");
  } else {
    toggleBtn.innerHTML = "💡";
    body.classList.add("text-gray-900");
    body.classList.remove("text-gray-100");
    profile.classList.add("bg-slate-200");
    profile.classList.remove("bg-gray-900");
  }
});
