var itens = [];
document.querySelector('.list button').addEventListener('click',()=>{
    var produto = document.getElementById('produto_nome');
    var preco = document.getElementById('produto_preco');

    itens.push({
        nome: produto.value,
        valor: preco.value
    });
    var soma = 0;
    var lista = document.querySelector('.produtos');
    lista.innerHTML = "";
    itens.map(function(val){
    soma += parseFloat(val.valor);
    lista.innerHTML+=`
    <div class="produtos_single">
        <h3>`+val.nome+`</h3>
        <h3>`+val.valor+`</h3>
    </div>
    `;
    produto.value = "";
    preco.value = "";
    })


    document.querySelector('.total h3').innerHTML = 'R$ '+soma;
    soma = soma.toFixed(2);
})

document.querySelector('button[name=limpar]').addEventListener('click',()=>{
    if((document.querySelector('.produtos').innerHTML) === ""){
        alert('Seu carrinho está vazio');
    }
    itens = [];
    document.querySelector('.produtos').innerHTML = "";
    document.querySelector('.total h3').innerHTML = "R$ 0";
})