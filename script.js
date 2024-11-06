const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
   faq.addEventListener('click', () => {
       faq.classList.toggle('open');

       const icon = faq.querySelector('.faq_icon i');
       if(icon.className === "fa-solid fa-plus") {
         icon.className = "fa-solid fa-minus"
       } else {
         icon.className = "fa-solid fa-plus"
       }
   })
})

var menu = document.getElementsById("bar");
var item = document.getElementsById("item");

 item.style.right = '-300px';
menu.onclick = function () {
    if (item.style.right == '-300px') {
        item.style.right = '0';
     }
     else {
        item.style.right = '-300px';
     }   
}



