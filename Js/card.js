function openModal(e){let t=document.getElementById(e),l=t.querySelector("img").src,n=l.substring(l.lastIndexOf("/")+1),a=t.querySelector(".card-title").innerText,o=t.querySelector(".card-text").innerText,r=`مرحبًا، أرغب في حجز هذا العنصر:

  العنوان: ${a}
  الوصف: ${o}
  
  اسم الصورة: ${n}`;document.getElementById("whatsapp-link").href=`https://wa.me/+967770833307?text=${encodeURIComponent(r)}`,document.getElementById("facebook-link").href="https://www.facebook.com/AlShohaiter",document.getElementById("instagram-link").href="https://www.instagram.com/seham_alhomaidi/",document.getElementById("call-link").href="tel:+967770833307",document.getElementById("myModal").style.display="flex"}function closeModal(){document.getElementById("myModal").style.display="none"}