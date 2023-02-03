class Carrinho {
  constructor() {
    this.itens = [];
    this.entrega = 30;
    this.impostos = 7;
    this.subtotal = 0;
    this.total = 0;
  }

  //   MOSTRA CARRINHO______________________________________________________
  mostrarItens() {
    console.log("_".repeat(60));
    console.log("Itens no carrinho:");
    for (let i = 0; i < this.itens.length; i++) {
      console.log(
        `Nome: ${this.itens[i].nome}, Quantidade: ${this.itens[i].quantidade}, Preço: ${this.itens[i].preco}`
      );
    }
  }

  //   ADICIONAR PRODUTO__________________________________________________
  adicionarProduto(nome, quantidade, preco) {
    // Verifica se o produto já está no carrinho
    // Usa o find para pesquisar no array se o produto ja esta no carrinho
    let itemExistente = this.itens.find((item) => item.nome === nome);

    // Validação de dados de entrada
    if (!nome || !quantidade || !preco) {
      console.log(
        "Por favor forneça todos os dados do produto (nome, quantidade e preço)"
      );
      return;
    }

    if (itemExistente) {
      // Se o produto já está no carrinho, atualiza a quantidade
      itemExistente.quantidade += quantidade;
    } else {
      // Se não, adiciona um novo item ao carrinho
      let item = {};
      item.nome = nome;
      item.quantidade = quantidade;
      item.preco = preco;
      this.itens.push(item);
    }

    this.atualizarTotais();
    console.log(this.mostrarItens());
    console.log(`Subtotal: ${meuCarrinho.subtotal}`);
    console.log(`Total: ${meuCarrinho.total}`);
  }

  //   REMOVER PRODUTO_______________________________________________________
  removerProduto(nome) {
    let novosItens = [];
    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i].nome !== nome) {
        novosItens.push(this.itens[i]);
      }
    }
    this.itens = novosItens;

    this.atualizarTotais();
    console.log(this.mostrarItens());
    console.log(`Subtotal: ${meuCarrinho.subtotal}`);
    console.log(`Total: ${meuCarrinho.total}`);
  }

  //   CALCULO DO TOTAL______________________________________________________
  atualizarTotais() {
    // Calcula o subtotal
    this.subtotal = this.itens.reduce((acumulador, item) => {
      return acumulador + item.preco * item.quantidade;
    }, 0);

    // Calcula o total
    this.total =
      this.subtotal + this.entrega + this.subtotal * (this.impostos / 100);
  }
}

// Criar um novo carrinho__________________________________________________
let meuCarrinho = new Carrinho();

// Adicionar alguns produtos ao carrinho
meuCarrinho.adicionarProduto("Celular", 2, 1000);
meuCarrinho.adicionarProduto("Notebook", 1, 2500);
meuCarrinho.adicionarProduto("Tablet", 3, 800);

// Remover um produto do carrinho
meuCarrinho.removerProduto("Notebook");
