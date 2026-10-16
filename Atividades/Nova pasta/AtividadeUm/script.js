
const botao = document.getElementById("carregar");
const produtos = document.getElementById("produtos");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", async function() {
    mensagem.textContent = "Carregando produtos...";
    produtos.innerHTML = "";

    try {
        const response = await fetch("https://dummyjson.com/products?limit=12");

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const dados = await response.json();

        dados.products.forEach(function(produto) {
            produtos.innerHTML += `
                <div class="card">
                    <img src="${produto.thumbnail}" alt="${produto.title}">
                    <h2>${produto.title}</h2>
                    <p>Preço: US$ ${produto.price}</p>
                    <p>Categoria: ${produto.category}</p>
                </div>
            `;
        });

        mensagem.textContent = "";

    } catch (erro) {
        mensagem.textContent = "Erro ao carregar os produtos.";
    }
});
