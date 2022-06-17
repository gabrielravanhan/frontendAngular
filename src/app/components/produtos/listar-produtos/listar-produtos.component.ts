import { IProduto } from './../../../models/IProduto.model';
import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaProdutos: IProduto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.buscarTodosProdutos().subscribe(retorno => {
      this.listaProdutos = retorno;
    });
  }

  deletarProduto(produto: IProduto): void {
    this.produtoService.excluirProduto(produto.id!).subscribe(() => {
      this.produtoService.exibirMensagem(
        'SISTEMA',
        `${produto.nome} foi excluído com sucesso`,
        'toast-error'
      );
      this.carregarProdutos();
    })
  }
}
