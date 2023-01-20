/*document.querySelector('name').addEventListener("hover", () => {
    var conteudo = document.getElementById('d-dogs')
    
    if(conteudo.classList.contains('ver')){
        conteudo.classList.remove('ver')
    }else{
        conteudo.classList.add('ver')
    }
})*/

document.getElementById('ver').addEventListener('click', () => {
    var conteudo = document.querySelector(".main-div4-line2")
    var button = document.getElementById('ver')

    if(conteudo.classList.contains("ver")){
        conteudo.classList.remove('ver')
        button.innerHTML = 'Ver mais'
    }else{
        conteudo.classList.add('ver')
        button.innerHTML = 'Ver menos'
    }
})

function anim(el) {
    var textArray = el.innerHTML.split("");
    el.innerHTML = "";

    textArray.forEach((letter, i) => {
        setTimeout(() => (el.innerHTML += letter), 80 * i );
    });    
}

var animar = document.getElementById("name")

function anima(){
   anim(animar);
}

anim(animar);

document.getElementById("menu-h").addEventListener('click', () => {
    const input = document.getElementById("menu-h");
    const menu = document.querySelector(".header-main")

      if (input .checked) {
          menu.style.transform = 'translateX(0%)';
      } else {
          menu.style.transform = 'translateX(-100%)';
  }
})