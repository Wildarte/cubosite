$(document).ready(function(){
    
    $('.carroussel_plat').owlCarousel({
      loop:true,
      margin:20,
      nav:false,
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  });

  const list_faq = document.querySelectorAll('.list_faq li .col_info_faq h4');
  const icon_faq = document.querySelectorAll('.list_faq li .col_icon_faq .icon_faq');
  const text_faq = document.querySelectorAll('.list_faq li .col_info_faq p');

  text_faq.forEach((item) => {
    
    let hei = item.getBoundingClientRect().height;
    console.log(hei);

  })

  if(list_faq){

    list_faq.forEach((item, index) => {

        item.addEventListener('click', () => {

            if(icon_faq[index].querySelector('img').classList.contains('rotate_45')){
                icon_faq[index].querySelector('img').classList.remove('rotate_45');
                text_faq[index].classList.remove('height_auto');
            }else{
                text_faq.forEach((item2) => {
                    item2.classList.remove('height_auto');
                });
    
                icon_faq.forEach((item3) => {
                    item3.querySelector('img').classList.remove('rotate_45');
                })
    
                let height_p = text_faq[index].getBoundingClientRect().height;
    
                text_faq[index].classList.add('height_auto');
                icon_faq[index].querySelector('img').classList.add('rotate_45');

            }

        });

    });

    icon_faq.forEach((item, index) => {

        item.addEventListener('click', () => {

            if(icon_faq[index].querySelector('img').classList.contains('rotate_45')){
                icon_faq[index].querySelector('img').classList.remove('rotate_45');
                text_faq[index].classList.remove('height_auto');
            }else{
                text_faq.forEach((item2) => {
                    item2.classList.remove('height_auto');
                });
    
                icon_faq.forEach((item3) => {
                    item3.querySelector('img').classList.remove('rotate_45');
                })
    
                let height_p = text_faq[index].getBoundingClientRect().height;
    
                text_faq[index].classList.add('height_auto');
                icon_faq[index].querySelector('img').classList.add('rotate_45');
                
            }

        });

    });

  }


  const close_menu_mobile = document.getElementById('close_menu_mobile');
  const open_menu_mobile = document.getElementById('open_menu_mobile');
  const nav_menu = document.querySelector('nav.menu');
  
  close_menu_mobile.addEventListener('click', () => {

    nav_menu.classList.remove('open_menu_mobile');

  });

  open_menu_mobile.addEventListener('click', () => {

    nav_menu.classList.add('open_menu_mobile');

  });










  //typing text ===================================================
  let words = ["Primeira", "Segunda", "Terceira", "Quarta"];
  let currentIndex = 0;
  let textElement = document.getElementById("title");
  let intervalId;

  if(textElement){
    function typeWord(word) {
        let currentText = "";
        let index = 0;
        intervalId = setInterval(function() {
            currentText += word[index];
            textElement.textContent = currentText;
            index++;
            if (index === word.length) {
                clearInterval(intervalId);
                setTimeout(function() {
                    eraseWord(word);
                }, 1000);
            }
        }, 200);
    }
  
    function eraseWord(word) {
        let currentText = word;
        let index = word.length - 1;
        intervalId = setInterval(function() {
            currentText = currentText.slice(0, index);
            textElement.textContent = currentText;
            index--;
            if (index === -1) {
                clearInterval(intervalId);
                currentIndex++;
                if (currentIndex === words.length) {
                    currentIndex = 0;
                }
                setTimeout(function() {
                    typeWord(words[currentIndex]);
                }, 500);
            }
        }, 100);
    }
  
    typeWord(words[currentIndex]);
  }

  

})