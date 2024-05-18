let outros = document.getElementById('outros')
let genero = document.getElementsByName('genero')

function abrirOutros(){
    if(genero[2].checked){
        outros.disabled = false
    } else{
        outros.disabled = true
        outros.valeu = ""
    }
}