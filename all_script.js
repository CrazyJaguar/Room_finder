fetch("navbar.html")
     .then(res => res.text())
     .then(data => document.getElementById("navbar").innerHTML = data);
AOS.init({ duration: 1000, once: true });

document.addEventListener("input", function(e) {
  if (e.target.id === "searchInput") {
      window.globalSearchValue = e.target.value;
  }
});

function redirectToSearch(e) {
  e.preventDefault();
  const query = window.globalSearchValue?.trim() || "";
  if (query) {
    window.location.href = `search-results.html?location=${encodeURIComponent(query)}`;
  }
}


window.addEventListener('scroll', () => {
  const nav = document.querySelector('.custom-nav');
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });