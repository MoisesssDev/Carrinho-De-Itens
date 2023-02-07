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
    // retorna todos os this da class
    return this;
  }

  //   ADICIONAR PRODUTO__________________________________________________
  adicionarProduto(sku, nome, quantidade, preco) {
    // Validação de dados de entrada
    if (!nome || !quantidade || !preco) {
      console.log(
        "Por favor forneça todos os dados do produto (código SKU , nome, quantidade e preço)"
      );
      return;
    }

    // Verifica se o produto já está no carrinho
    // Usa o find para pesquisar no array se o produto ja esta no carrinho
    let itemExistente = this.itens.find((item) => item.nome === nome);

    if (itemExistente) {
      // Se o produto já está no carrinho, atualiza a quantidade
      itemExistente.quantidade += quantidade;
    } else {
      // Se não, adiciona um novo item ao carrinho
      let item = {
        sku,
        nome,
        quantidade,
        preco,
      };

      this.itens.push(item);
    }

    this.atualizarTotal();
    // console.log(this.mostrarItens());
  }

  //   REMOVER PRODUTO_______________________________________________________
  removerProduto(sku) {
    let novosItens = [];
    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i].sku !== sku) {
        novosItens.push(this.itens[i]);
      }
    }
    this.itens = novosItens;

    this.atualizarTotal();
  }

  //   CALCULO DO TOTAL______________________________________________________
  atualizarTotal() {
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
// meuCarrinho.adicionarProduto(122312, "Celular", 2, 1000);
// meuCarrinho.adicionarProduto(132131, "Notebook", 1, 2500);
// meuCarrinho.adicionarProduto(167357, "Tablet", 3, 800);

// Remover um produto do carrinho
// meuCarrinho.removerProduto(167357);
