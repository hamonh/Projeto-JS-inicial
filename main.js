function tocaSom (idElementAudio) {
document.querySelector(idElementAudio).play()    
}

const listaDeTeclas = document.querySelectorAll('.tecla')

//let contador = 0

// while(contador < listaDeTeclas.length){
     
//     const tecla = listaDeTeclas[contador]

//     const instrumento = tecla.classList[1]

//     //template string
//     const idAudio = `#som_${instrumento}`


//     listaDeTeclas[contador].onclick = function(){

//    tocaSom(idAudio)
   
//     }

//     contador = contador + 1
// }
for(let contador = 0; contador < listaDeTeclas.length; contador++ ){
   
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    //template string
    const idAudio = `#som_${instrumento}`

    listaDeTeclas[contador].onclick = function(){
    tocaSom(idAudio)
    }

}