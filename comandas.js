let comandas = [];

function novaComanda() {
  let cliente = prompt("Nome do cliente:");
  let mesa = prompt("Mesa (opcional):");

  let comanda = {
    cliente: cliente,
    mesa: mesa,
    itens: [],
    total: 0
  };

  let addItens = true;

  while (addItens) {
    let item = prompt("Adicionar item (ou vazio para parar):\nEx: Cerveja 6, Espetinho 10");

    if (!item) break;

    let partes = item.split(" ");
    let nome = partes[0];
    let valor = parseFloat(partes[1]);

    if (!isNaN(valor)) {
      comanda.itens.push({ nome, valor });
      comanda.total += valor;
    }
  }

  comandas.push(comanda);
  render();
}

function render() {
  let div = document.getElementById("comandas");
  div.innerHTML = "";

  comandas.forEach((c, index) => {
    div.innerHTML += `
      <div class="card">
        <h3>Cliente: ${c.cliente}</h3>
        <p>Mesa: ${c.mesa}</p>
        <p>Itens:</p>
        <ul>
          ${c.itens.map(i => `<li>${i.nome} - R$ ${i.valor}</li>`).join("")}
        </ul>
        <h4>Total: R$ ${c.total.toFixed(2)}</h4>

        <button onclick="fechar(${index})">Fechar Comanda</button>
      </div>
    `;
  });
}

function fechar(index) {
  alert("Comanda fechada! Total: R$ " + comandas[index].total.toFixed(2));
  comandas.splice(index, 1);
  render();
}
