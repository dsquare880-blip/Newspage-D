
 
    const toggle = document.getElementById("themeToggle");
    const body = document.body;

    // --- Load saved theme on page load ---
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark");
        toggle.innerHTML = '<i class="fa fa-moon"></i>';
    } else {
        body.classList.remove("dark");
        toggle.innerHTML = '<i class="fa fa-sun"></i>';
    }

    // --- Toggle theme on click ---
    toggle.addEventListener("click", () => {
        body.classList.toggle("dark");

        // --- Update icon & save theme preference ---
        if (body.classList.contains("dark")) {
            toggle.innerHTML = '<i class="fa fa-moon"></i>';
            localStorage.setItem("theme", "dark");
        } else {
            toggle.innerHTML = '<i class="fa fa-sun"></i>';
            localStorage.setItem("theme", "light");
        }
    });





    // new

    
      const toggle = document.getElementById("themeToggle");
      const body = document.body;
      const wave1 = document.getElementById("wave1");
      const wave2 = document.getElementById("wave2");
      const wave3 = document.getElementById("wave3");
      const wave4 = document.getElementById("wave4");

      // --- Function to apply a given theme ---
      function applyTheme(theme) {
        if (theme === "dark") {
          body.classList.add("dark");
          wave1.classList.add("dark");
          wave2.classList.add("dark");
          wave3.classList.add("dark");
          wave4.classList.add("dark");
          toggle.innerHTML = '<i class="ri-sun-fill"></i>';
        } else {
          body.classList.remove("dark");
          wave1.classList.remove("dark");
          wave2.classList.remove("dark");
          wave3.classList.remove("dark");
          wave4.classList.remove("dark");
          toggle.innerHTML = '<i class="ri-moon-fill"></i>';
        }
      }
