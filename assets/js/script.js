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


  //==================== contador =========================
  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function contadorQuandoDivAparece() {
    let contador = 0;
    let contador2 = 0;
    let contador3 = 0;
    let is_view_one = document.getElementById('is_view_one');
    let is_view_two = document.getElementById('is_view_two');
    let is_view_three = document.getElementById('is_view_three');

    let count_one = document.getElementById('count_one');
    let count_two = document.getElementById('count_two');
    let count_three = document.getElementById('count_three');
  
    function verificarVisibilidade1() {
      
      if (isElementInViewport(is_view_one)) {
        contador++;
        if (contador <= 44) {
          console.log("Contagem: " + contador);
          count_one.innerHTML = contador
        }else{
            clearInterval(intervalID1);
        }
      }

    }

    function verificarVisibilidade2(){
        if (isElementInViewport(is_view_two)) {
            contador2++;
            if (contador2 <= 44) {
              console.log("Contagem: " + contador2);
              count_two.innerHTML = contador2
            }else{
                clearInterval(intervalID2);
            }
          }
    }

    function verificarVisibilidade3(){
        if (isElementInViewport(is_view_three)) {
            contador3++;
            if (contador3 <= 27) {
              console.log("Contagem: " + contador3);
              count_three.innerHTML = contador3
            }else{
                clearInterval(intervalID3);
            }
          }
    }
  
    // Verificar a visibilidade quando a página carrega e quando a rolagem acontece
    //verificarVisibilidade();
    let is_view = document.getElementById('is_view_one')
    if(is_view){

        let intervalID1 = setInterval(verificarVisibilidade1, 60);
        let intervalID2 = setInterval(verificarVisibilidade2, 60);
        let intervalID3 = setInterval(verificarVisibilidade3, 60);
    }
  }

  contadorQuandoDivAparece();
  //==================== contador =========================



  function distanciaElementoAoTopo(el) {
    var rect = el.getBoundingClientRect();
    return rect.top + window.scrollY;
  }

  const modelos_lojas = document.getElementById('modelos_lojas');
  let dist_modelos_lojas = distanciaElementoAoTopo(modelos_lojas);
  console.log('distancia modelos loja: '+dist_modelos_lojas);

  const modelos_realidade = document.getElementById('modelos_realidade');
  let distancia_modelos_realidade = distanciaElementoAoTopo(modelos_realidade);
  console.log('distancia modelos_realidade: '+ distancia_modelos_realidade)

  const modelos_marketing = document.getElementById('modelos_marketing');
  let distancia_modelos_marketing = distanciaElementoAoTopo(modelos_marketing);
  console.log('distancia modelos_marketing: '+distancia_modelos_marketing); 

  //==== itens switch ============================================================
  const list_switch = document.querySelectorAll('.list_switch li a');
  const list_s = document.getElementById('content_swicth');

  let width_item = [];

  list_switch.forEach((item, index) => {

    width_item[index] = item.getBoundingClientRect().width;

  });
  //==== itens switch ============================================================

  document.addEventListener('scroll', () => {

    let current_scroll = window.scrollY;
    console.log(current_scroll);

    if(current_scroll >= distancia_modelos_realidade){
        list_s.scrollLeft =  width_item[0];
        list_switch.forEach((item) => {

            item.classList.remove('active')

        });

        list_switch[1].classList.add('active');
    }else{
        list_s.scrollLeft =  0;
        list_switch.forEach((item) => {

            item.classList.remove('active')

        });

        list_switch[0].classList.add('active');
    }
    
    if(current_scroll >= distancia_modelos_marketing){
        list_s.scrollLeft =  (width_item[0] + width_item[1]);
        list_switch.forEach((item) => {

            item.classList.remove('active')

        });

        list_switch[2].classList.add('active');
    }

  });

})