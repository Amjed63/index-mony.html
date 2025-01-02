const products = [
    { id: 1, name: " سجافات", image: "img for card/7.jpg", link: "index-1.html" },
    { id: 1, name: "كوش ", image: "img for card/k1.jpg", link: "index-kusha.html" },
];


const searchInput = document.getElementById("search-input");
const suggestions = document.getElementById("suggestions");
const productsContainer = document.getElementById("products");



// البحث عند الضغط على زر البحث
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
        // روابط متعددة بناءً على كلمات البحث
        if (query.includes("سجافات")) {
            window.location.href = "index-1.html";
        } else if (query.includes("كوش")) {
            window.location.href = "index-kusha.html";
        } else {
            // رابط افتراضي إذا لم يتم العثور على تطابق
            window.location.href = `search-results.html?query=${query}`;
        }
    }
});

// البحث عند الضغط على Enter في مربع الإدخال
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            // روابط متعددة بناءً على كلمات البحث
            if (query.includes("سجافات")) {
                window.location.href = "index-1.html";
            } else if (query.includes("كوش")) {
                window.location.href = "index-kusha.html";
            } else {
                // رابط افتراضي إذا لم يتم العثور على تطابق
                window.location.href = `search-results.html?query=${query}`;
            }
        }
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