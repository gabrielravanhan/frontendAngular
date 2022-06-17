import { ProdutoService } from './../../../services/produto.service';
import { IProduto } from './../../../models/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null
  };

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    this.produtoService.cadastrarProduto(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtoService.exibirMensagem(
        'SISTEMA',
        `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }
}
