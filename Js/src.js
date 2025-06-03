const products = [
    { id: 1, name: " سجافات", image: "img for card/7.jpg", link: "index-1.html" },   
    { id: 1, name: " سجاف", image: "img for card/7.jpg", link: "index-1.html" },
    { id: 1, name: "كوش ", image: "img for card/k1.jpg", link: "index-kusha.html" },
    { id: 1, name: "فساتين ", image: "img for card/dress2.jpg", link: "dress.html" },
    { id: 1, name: "فستان ", image: "img for card/dress2.jpg", link: "dress.html" },
];


const searchInput = document.getElementById("search-input");
const suggestions = document.getElementById("suggestions");
const productsContainer = document.getElementById("products");


// البحث عند الضغط على Enter في مربع الإدخال
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const query = searchInput.value.trim().toLowerCase();

        if (query.length >= 2) { // التحقق من أن الإدخال يحتوي على حرفين أو أكثر
            const matchedProduct = products.find(product =>
                product.name.toLowerCase().includes(query)
            );

            if (matchedProduct) {
                // إذا تم العثور على المنتج
                window.location.href = matchedProduct.link;
            } else {
                // إذا لم يتم العثور على المنتج
                window.location.href = `search-results.html?query=${query}`;
            }
        } else {
            alert("يرجى كتابة حرفين أو أكثر للبحث.");
        }
    }
});

// البحث عند الضغط على زر البحث
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();

    if (query.length >= 2) { // التحقق من أن الإدخال يحتوي على حرفين أو أكثر
        const matchedProduct = products.find(product =>
            product.name.toLowerCase().includes(query)
        );

        if (matchedProduct) {
            // إذا تم العثور على المنتج
            window.location.href = matchedProduct.link;
        } else {
            // إذا لم يتم العثور على المنتج
            window.location.href = `search-results.html?query=${query}`;
        }
    } else {
        alert("يرجى كتابة حرفين أو أكثر للبحث.");
    }
});

// البحث مع الاقتراحات
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    // عرض الاقتراحات
    suggestions.innerHTML = "";
    if (filteredProducts.length > 0 && query) {
        suggestions.style.display = "block";
        filteredProducts.forEach(product => {
            const suggestionDiv = document.createElement("div");
            suggestionDiv.textContent = product.name;
            suggestionDiv.onclick = () => {
                window.location.href = product.link;
            };
            suggestions.appendChild(suggestionDiv);
        });
    } else if (query) {
        // إذا لم يتم العثور على نتائج
        suggestions.style.display = "block";
        const suggestionDiv = document.createElement("div");
        suggestionDiv.textContent = "الذهاب إلى صفحة البحث";
        suggestionDiv.onclick = () => {
            window.location.href = `search-results.html?query=${query}`;
        };
        suggestions.appendChild(suggestionDiv);
    } else {
        suggestions.style.display = "none";
    }
});

// إخفاء الاقتراحات عند الضغط خارج مربع البحث
document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container-home")) {
        suggestions.style.display = "none";
    }
});

//============== loading-screen 
  function hideLoading() {
    const loader = document.getElementById("loading-screen");
    if (loader) loader.style.display = "none";
  }

  // بعد 8 ثواني: عرض رسالة ضعف الاتصال
  setTimeout(() => {
    const message = document.getElementById("loading-message");
    if (message) {
      message.innerHTML = "يرجى الانتظار قليلا‌ لتحميل الصفحه ☺";
    }
  }, 8000);

  // بعد تحميل الصفحة أو بعد 15 ثانية: إخفاء شاشة التحميل
  window.addEventListener("load", hideLoading);
  setTimeout(hideLoading, 15000);
