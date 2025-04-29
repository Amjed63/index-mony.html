function openModal(e) {
  let t = document.getElementById(e);

  // الحصول على مصدر الصورة
  let l = t.querySelector("img").src;

  // استخراج اسم الصورة من الرابط
  let n = l.substring(l.lastIndexOf("/") + 1);

  // الحصول على العنوان والوصف
  let a = t.querySelector(".card-title").innerText;
  let o = t.querySelector(".card-text").innerText;

  // إعداد نص الرسالة
  let r = `مرحبًا، أرغب في حجز هذا العنصر:

  العنوان: ${a}
  الوصف: ${o}
  `;

  // تحديث روابط التواصل
  document.getElementById("whatsapp-link").href =
    `https://wa.me/+967770833307?text=${encodeURIComponent(r)}`;

  document.getElementById("facebook-link").href =
    "https://www.facebook.com/AlShohaiter";

  document.getElementById("instagram-link").href =
    "https://www.instagram.com/seham_alhomaidi/";

  document.getElementById("call-link").href =
    "tel:+967770833307";

  // عرض النافذة
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
