
      const moreSub = document.getElementById('moreSub');
      const moreSmall1 = document.getElementById('moreSmall1');
      const linkSub1 = document.getElementById('linkSub1');
      const linkSub2 = document.getElementById('linkSub2');
      const linkSub3 = document.getElementById('linkSub3');
      const bottomNav = document.getElementById('bottomNav');

      
    
      moreSub.addEventListener('click', () => {
        moreSub.classList.add('active');
      });
    
      moreSub.addEventListener('click', () => {
        linkSub1.classList.remove('active');
      });
     
      moreSub.addEventListener('click', () => {
        linkSub2.classList.remove('active');
      });
    
      moreSub.addEventListener('click', () => {
        linkSub3.classList.remove('active');
      });
      
      linkSub1.addEventListener('click', () => {
        moreSub.classList.remove('active');
      });

      linkSub2.addEventListener('click', () => {
        moreSub.classList.remove('active');
      });

      linkSub3.addEventListener('click', () => {
        moreSub.classList.remove('active');
      });
    
    moreSub.addEventListener('click', () => {
        bottomNav.classList.add('active');
      });
    
      linkSub1.addEventListener('click', () => {
        bottomNav.classList.remove('active');
      });

     linkSub2.addEventListener('click', () => {
        bottomNav.classList.remove('active');
      });

     linkSub3.addEventListener('click', () => {
        bottomNav.classList.remove('active');
      });




      document.addEventListener("DOMContentLoaded", () => {
        // Only run initSearch if defined
        if (typeof initSearch === "function") {
          try {
            initSearch();
          } catch (e) {
            console.warn("Search init skipped");
          }
        }

        const container = document.querySelector(".carousel-container");
        const track = container?.querySelector(".carousel-track");
        if (!container || !track) return;

        const items = Array.from(track.children);
        if (!items.length) return;

        const nextBtn = document.querySelector(".carousel-btn.next");
        const prevBtn = document.querySelector(".carousel-btn.prev");
        let index = 0;

        function updateSlide() {
          const width = container.clientWidth;
          items.forEach((t, i) => t.classList.toggle("active", i === index));
          track.style.transform = `translateX(-${index * width}px)`;
        }

        function setSizes() {
          const width = container.clientWidth;
          items.forEach((item) => (item.style.minWidth = width + "px"));
          updateSlide();
        }

        function nextSlide() {
          index = (index + 1) % items.length;
          updateSlide();
        }
        function prevSlide() {
          index = (index - 1 + items.length) % items.length;
          updateSlide();
        }

        nextBtn?.addEventListener("click", () => {
          nextSlide();
          restartAuto();
        });
        prevBtn?.addEventListener("click", () => {
          prevSlide();
          restartAuto();
        });

        let timer = null;
        function startAuto() {
          timer = setInterval(nextSlide, 4500);
        }
        function stopAuto() {
          clearInterval(timer);
          timer = null;
        }
        function restartAuto() {
          stopAuto();
          startAuto();
        }

        container.addEventListener("mouseenter", stopAuto);
        container.addEventListener("mouseleave", startAuto);
        window.addEventListener("resize", setSizes);

        setSizes();
        startAuto();
      });
    

    
      const tabs = document.querySelectorAll(".tab");
      const container = document.getElementById("sliderContainer");

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          // Remove active class from current tab
          document.querySelector(".tab.active").classList.remove("active");
          // Add active class to clicked tab
          tab.classList.add("active");

          // 🧠 Scroll logic: ensure clicked tab is visible
          const tabRect = tab.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          if (tabRect.left < containerRect.left) {
            // If the tab is hidden on the left side
            container.scrollBy({
              left: tabRect.left - containerRect.left - 10,
              behavior: "smooth",
            });
          } else if (tabRect.right > containerRect.right) {
            // If the tab is hidden on the right side
            container.scrollBy({
              left: tabRect.right - containerRect.right + 10,
              behavior: "smooth",
            });
          }
        });
      });
    
    

    
      const toggle = document.getElementById("themeToggle");
      const body = document.body;

      // --- Function to apply a given theme ---
      function applyTheme(theme) {
        if (theme === "dark") {
          body.classList.add("dark");
          toggle.innerHTML = '<i class="ri-sun-fill"></i>';
        } else {
          body.classList.remove("dark");
          toggle.innerHTML = '<i class="ri-moon-fill"></i>';
        }
      }

      // --- Get saved theme or auto-detect system preference ---
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme) {
        // Use user’s saved preference
        applyTheme(savedTheme);
      } else {
        // Detect system theme if no preference saved
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        applyTheme(prefersDark ? "dark" : "light");
      }

      // --- Toggle theme on click ---
      toggle.addEventListener("click", () => {
        const newTheme = body.classList.contains("dark") ? "light" : "dark";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
      });
    


      
  const check = document.getElementById("check");
  const CHECK_KEY = "userCheckPref"; // storage key name

  if (check) {
    // ✅ only run if checkbox exists
    // 1️⃣ Load the saved state on page load
    const savedState = localStorage.getItem(CHECK_KEY);
    check.checked = savedState === "true";

    // 2️⃣ Whenever user toggles it, save the new state
    check.addEventListener("change", () => {
      localStorage.setItem(CHECK_KEY, check.checked);
    });
  }



    const sliderZ = document.getElementById("sliderCont");
    const slidesZ = document.querySelectorAll(".slide-itemZ");
    const dotsContainer = document.getElementById("dotsContainer");
    const totalSlides = slidesZ.length;
    const maxVisibleDots = 5;

    let currentIndex = 0;
    let autoSlideInterval;

    function createDots() {
      dotsContainer.innerHTML = "";

      // Determine which group of dots to show
      let start = 0;
      let end = totalSlides;

      if (totalSlides > maxVisibleDots) {
        // Dynamic range of visible dots
        if (currentIndex < 3) {
          start = 0;
          end = maxVisibleDots;
        } else if (currentIndex > totalSlides - 4) {
          start = totalSlides - maxVisibleDots;
          end = totalSlides;
        } else {
          start = currentIndex - 2;
          end = currentIndex + 3;
        }
      }

      // Left overflow indicators
      if (totalSlides > maxVisibleDots && start > 0) {
        const dot1 = document.createElement("div");
        const dot2 = document.createElement("div");
        dot1.classList.add("overflow-dot");
        dot2.classList.add("overflow-dot");
        dotsContainer.append(dot1, dot2);
      }

      // Main dots
      for (let i = start; i < end; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === currentIndex) dot.classList.add("active");
        dot.addEventListener("click", () => {
          currentIndex = i;
          updateSlider();
          resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
      }

      // Right overflow indicators
      if (totalSlides > maxVisibleDots && end < totalSlides) {
        const dot3 = document.createElement("div");
        const dot4 = document.createElement("div");
        dot3.classList.add("overflow-dot");
        dot4.classList.add("overflow-dot");
        dotsContainer.append(dot3, dot4);
      }
    }

    function updateSlider() {
      slidesZ.forEach((s, i) => s.classList.toggle("active", i === currentIndex));
      sliderZ.style.transform = `translateX(-${currentIndex * 100}%)`;
      createDots();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    document.getElementById("nextBtn").addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });

    const wrapp = document.getElementById("sliderWrapp");
    wrapp.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
    wrapp.addEventListener("mouseleave", startAutoSlide);

    updateSlider();
    startAutoSlide();




    // Video Slider

     const randContainer = document.getElementById("randomVidsContainer");
     const randSlider = document.getElementById("randSlider");
     const btnNext = document.getElementById("btnNext");
     const btnPrev = document.getElementById("btnPrev");

     const cardWidth = 240; // 240 + 20 gap
     const totalCards = randSlider.children.length;

     /* =============================
           1. BUTTON CONTROLS
        ============================== */
     btnNext.addEventListener("click", () => {
       let maxScroll = randSlider.scrollWidth - randContainer.clientWidth;

       if (randContainer.scrollLeft + cardWidth >= maxScroll) {
         randContainer.scrollTo({ left: 0, behavior: "smooth" });
       } else {
         randContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
       }
     });

     btnPrev.addEventListener("click", () => {
       if (randContainer.scrollLeft <= 0) {
         let maxScroll = randSlider.scrollWidth - randContainer.clientWidth;
         randContainer.scrollTo({ left: maxScroll, behavior: "smooth" });
       } else {
         randContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });
       }
     });

     /* =============================
           2. DRAG SCROLL (Desktop)
        ============================== */
     let isDown = false;
     let startX;
     let scrollLeft;

     randContainer.addEventListener("mousedown", (e) => {
       isDown = true;
       startX = e.pageX - randContainer.offsetLeft;
       scrollLeft = randContainer.scrollLeft;
     });

     randContainer.addEventListener("mouseup", () => (isDown = false));
     randContainer.addEventListener("mouseleave", () => (isDown = false));

     randContainer.addEventListener("mousemove", (e) => {
       if (!isDown) return;
       e.preventDefault();
       const x = e.pageX - randContainer.offsetLeft;
       const walk = (x - startX) * 1.6;
       randContainer.scrollLeft = scrollLeft - walk;
     });

     /* =============================
           3. TOUCH SWIPE (Mobile)
        ============================== */
     let touchStartX = 0;

     randContainer.addEventListener("touchstart", (e) => {
       touchStartX = e.touches[0].clientX;
     });

     randContainer.addEventListener("touchend", (e) => {
       const diff = e.changedTouches[0].clientX - touchStartX;

       if (Math.abs(diff) > 50) {
         if (diff < 0) btnNext.click();
         else btnPrev.click();
       }
     });