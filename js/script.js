let lista = document.querySelectorAll('.agente');
let ir = document.getElementById('ir')
let vir = document.getElementById('vir')

let contagem = lista.length
let ativado = 0

ir.onclick = () =>{
    let deixar = document.querySelector('.ativo')
    deixar.classList.remove('ativo')

    ativado = ativado >= contagem - 1 ? 0 : ativado +1
    lista[ativado].classList.add('ativo')
}

vir.onclick = () =>{
    let deixar = document.querySelector('.ativo')
    deixar.classList.remove('ativo')

    ativado = ativado <= 0 ? contagem - 1 : ativado -1
    lista[ativado].classList.add('ativo')
}