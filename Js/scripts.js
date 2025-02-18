(hamb=document.querySelector(".hamb")).onclick=function(){(navbar=document.querySelector(".nav-bar")).classList.toggle("active")};let progressSpans=document.querySelectorAll(".the-progress span"),section=document.querySelector(".our-skills"),nums=document.querySelectorAll(".stats .number"),statsSection=document.querySelector(".stats"),started=!1;function startCount(t){let e=t.dataset.goal,s=setInterval(()=>{t.textContent++,t.textContent==e&&clearInterval(s)},2e3/e)}window.onscroll=function(){window.scrollY>=section.offsetTop-250&&progressSpans.forEach(t=>{t.style.width=t.dataset.width}),window.scrollY>=statsSection.offsetTop&&(started||nums.forEach(t=>startCount(t)),started=!0)};


// This is fot links of pages

     const prevBtn = document.getElementById("prev");
        const nextBtn = document.getElementById("next");
        const pagesContainer = document.querySelector(".pages");
        const pages = document.querySelectorAll(".page-content");
        const totalPages = pages.length;
        let currentPage = 1;

        function renderPagination() {
            pagesContainer.innerHTML = "";

            // إنشاء أرقام الصفحات داخل البار
            for (let i = 1; i <= totalPages; i++) {
                const pageBtn = document.createElement("div");
                pageBtn.classList.add("page");
                pageBtn.textContent = i;
                if (i === currentPage) pageBtn.classList.add("active");
                pageBtn.addEventListener("click", () => goToPage(i));
                pagesContainer.appendChild(pageBtn);
            }

            // تحديث حالة الأزرار
            prevBtn.classList.toggle("disabled", currentPage === 1);
            nextBtn.classList.toggle("disabled", currentPage === totalPages);
        }

        function goToPage(page) {
            pages.forEach((p, index) => {
                p.classList.toggle("hidden", index + 1 !== page);
            });

            currentPage = page;
            renderPagination();
        }

        prevBtn.addEventListener("click", () => {
            if (currentPage > 1) goToPage(currentPage - 1);
        });

        nextBtn.addEventListener("click", () => {
            if (currentPage < totalPages) goToPage(currentPage + 1);
        });

        renderPagination();
        
        // تغيير اماكن cards
        
        document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.cards-container'); // استبدل '.cards-container' بالعنصر الحاوي للبطاقات
    const cards = Array.from(cardsContainer.children);
    const storageKey = 'lastShuffleTime';
    const hoursToShuffle = 27;
    const now = new Date().getTime();
    const lastShuffleTime = localStorage.getItem(storageKey);

    if (!lastShuffleTime || (now - lastShuffleTime) > hoursToShuffle * 60 * 60 * 1000) {
        shuffleCards();
        localStorage.setItem(storageKey, now);
    }

    function shuffleCards() {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        cards.forEach(card => cardsContainer.appendChild(card));
    }
});
