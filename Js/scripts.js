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


