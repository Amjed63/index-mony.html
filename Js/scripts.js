(hamb=document.querySelector(".hamb")).onclick=function(){(navbar=document.querySelector(".nav-bar")).classList.toggle("active")};let progressSpans=document.querySelectorAll(".the-progress span"),section=document.querySelector(".our-skills"),nums=document.querySelectorAll(".stats .number"),statsSection=document.querySelector(".stats"),started=!1;function startCount(t){let e=t.dataset.goal,s=setInterval(()=>{t.textContent++,t.textContent==e&&clearInterval(s)},2e3/e)}window.onscroll=function(){window.scrollY>=section.offsetTop-250&&progressSpans.forEach(t=>{t.style.width=t.dataset.width}),window.scrollY>=statsSection.offsetTop&&(started||nums.forEach(t=>startCount(t)),started=!0)};


// This is fot links of pages

function showPage(pageId) {
    // إخفاء جميع الصفحات
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // عرض الصفحة المحددة
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');
}


// modal box for images 
   document.addEventListener("DOMContentLoaded", function() {
        const modalImage1 = document.getElementById("modalImage1");
        const modalVideo = document.getElementById("modalVideo");
        const modalImage2 = document.getElementById("modalImage2");

        document.querySelectorAll(".open-modal").forEach(button => {
            button.addEventListener("click", function() {
                const image1Src = this.getAttribute("data-image1");
                const videoSrc = this.getAttribute("data-video");
                const image2Src = this.getAttribute("data-image2");

                // تحديث الصورة الأولى
                if (image1Src) {
                    modalImage1.src = image1Src;
                    modalImage1.style.display = "block";
                } else {
                    modalImage1.style.display = "none";
                }

                // تحديث الفيديو
                if (videoSrc) {
                    modalVideo.src = videoSrc;
                    modalVideo.style.display = "block";
                } else {
                    modalVideo.style.display = "none";
                }

                // تحديث الصورة الثانية
                if (image2Src) {
                    modalImage2.src = image2Src;
                    modalImage2.style.display = "block";
                } else {
                    modalImage2.style.display = "none";
                }
            });
        });
    });
