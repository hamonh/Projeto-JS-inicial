function tocaSom (idElementAudio) {
const element = document.querySelector(idElementAudio)  
if(element != null && element.localName == 'audio'){
 element.play()  
}
else{
   alert('ERRO')
}
}

const listaDeTeclas = document.querySelectorAll('.tecla')

//let contador = 0

// while(contador < listaDeTeclas.length){
     
//     const tecla = listaDeTeclas[contador]

//     const instrumento = tecla.classList[1]

//     //template string
//     const idAudio = `#som_${instrumento}`


//    tecla.onclick = function(){

//    tocaSom(idAudio)
   
//     }

//     contador = contador + 1
// }
for(let contador = 0; contador < listaDeTeclas.length; contador++ ){
   
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}` //template string

    tecla.onclick = function(){
    tocaSom(idAudio)
    }
    tecla.onkeydown = function(evento) {
        if(evento.code === 'enter'|| evento.code ==='space')
        tecla.classList.add('ativa')
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}