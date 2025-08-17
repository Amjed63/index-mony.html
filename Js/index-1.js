//////////////////////////////Check Box//////////////////////////////
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((box) => {
  box.addEventListener('change', function() {
    if(this.checked){
      checkboxes.forEach((other) => {
        if(other !== this) other.checked = false;
      });
    }
  });
});
///////////////////////// modal box/////////////////////

let modal = document.getElementById("myModal");
let closeModalBtn = document.getElementById("closeModal");
let whatsappLink = document.getElementById("whatsappLink");
let selectedSgaf = "";

// فتح المودال عند الضغط على حجز
document.querySelectorAll(".book-btn").forEach((btn) => {
    btn.addEventListener("click", function(){
        let cardText = this.parentElement.querySelector("p").innerText;
        selectedSgaf = cardText;
        modal.style.display = "block";
    });
});

// إغلاق المودال
closeModalBtn.addEventListener("click", function(e){
    e.preventDefault();
    modal.style.display = "none";
});

// عند الضغط على واتساب
whatsappLink.addEventListener("click", function(){
    let phone = "967770833307"; // بدون +
    let message =` مرحبًا، أريد حجز ${selectedSgaf}`;
    let url =` https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    whatsappLink.href = url;
    modal.style.display = "none";
});

// إغلاق عند النقر خارج المودال
window.addEventListener("click", function(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
});



/////////////////// Pages ///////////////////

(function () {
  const container = document.querySelector('.cards');
  const pagination = document.querySelector('.pagination');
  const filterInputs = document.querySelectorAll('.filter input');
  const perPage = 8;
  let currentPage = 1;
  let activeCategories = [];

  function getCards() {
    return Array.from(container.querySelectorAll(':scope > .card'));
  }

  function ensureNumberElement(card) {
    let numberEl = card.querySelector('.card-number');
    if (!numberEl) {
      const content = card.querySelector('.card-content') || card;
      numberEl = document.createElement('p');
      numberEl.className = 'card-number';
      content.prepend(numberEl);
    }
    return numberEl;
  }

  // حفظ الرقم الأصلي لكل كرت عند التحميل أول مرة
  getCards().forEach((card, idx) => {
    card.dataset.originalNumber = idx + 1;
    const numberEl = ensureNumberElement(card);
    numberEl.textContent = `سجاف رقم ${card.dataset.originalNumber}`;
  });

  function filterCards(cards) {
    if (activeCategories.includes('all') || activeCategories.length === 0) {
      return cards;
    }
    return cards.filter(card => activeCategories.includes(card.dataset.category));
  }

  function render() {
    const allCards = getCards();
    const filteredCards = filterCards(allCards);
    const totalPages = Math.max(1, Math.ceil(filteredCards.length / perPage));
    if (currentPage > totalPages) currentPage = totalPages;

    allCards.forEach(card => card.style.display = 'none');

    filteredCards.forEach((card, idx) => {
      const numberEl = ensureNumberElement(card);
      // الرقم يبقى ثابت حسب ترتيبه الأصلي
      numberEl.textContent = `سجاف رقم ${card.dataset.originalNumber}`;
      const pageIndex = Math.floor(idx / perPage) + 1;
      if (pageIndex === currentPage) card.style.display = '';
    });

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    pagination.innerHTML = '';
    if (totalPages <= 1) return;

    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'السابق';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
      currentPage = Math.max(1, currentPage - 1);
      render();
    });
    pagination.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.disabled = i === currentPage;
      btn.addEventListener('click', () => {
        currentPage = i;
        render();
      });
      pagination.appendChild(btn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'التالي';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
      currentPage = Math.min(totalPages, currentPage + 1);
      render();
    });
    pagination.appendChild(nextBtn);
  }

  filterInputs.forEach(input => {
    input.addEventListener('change', () => {
      activeCategories = Array.from(filterInputs)
        .filter(chk => chk.checked)
        .map(chk => chk.value);
      currentPage = 1;
      render();
    });
  });

  const observer = new MutationObserver(() => render());
  observer.observe(container, { childList: true });

  document.addEventListener('DOMContentLoaded', render);
  render();
})();
