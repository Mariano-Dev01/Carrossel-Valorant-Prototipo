let lista = document.querySelectorAll('.agente');
let ir = document.getElementById('ir');
let vir = document.getElementById('vir');

let contagem = lista.length;
let ativado = 0;
let animando = false;

const DURACAO = 900; // um pouco maior que a animação mais longa (ms)

function trocar(novo, direcao) {
    if (animando || novo === ativado) return;
    animando = true;

    const classeDir = direcao === 1 ? 'dir-next' : 'dir-prev';
    const antigo = lista[ativado];
    const proximo = lista[novo];

    // Agente que está saindo
    antigo.classList.remove('ativo', 'dir-next', 'dir-prev');
    antigo.classList.add('saindo', classeDir);

    // Agente que está entrando
    proximo.classList.remove('dir-next', 'dir-prev');
    proximo.classList.add('ativo', classeDir);

    ativado = novo;

    setTimeout(() => {
        antigo.classList.remove('saindo', 'dir-next', 'dir-prev');
        animando = false;
    }, DURACAO);
}

ir.onclick = () => trocar(ativado >= contagem - 1 ? 0 : ativado + 1, 1);
vir.onclick = () => trocar(ativado <= 0 ? contagem - 1 : ativado - 1, -1);

// Bônus: setas do teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') ir.click();
    if (e.key === 'ArrowLeft') vir.click();
});