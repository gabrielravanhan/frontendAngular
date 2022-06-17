import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../../../services/produto.service';
import { IProduto } from './../../../models/IProduto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {

  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null
  };

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.produtoService.buscarProdutoPorId(id).subscribe(retorno => {
      this.produto = retorno;
    });
  }

  atualizarProduto(): void {
    this.produtoService.atualizarProduto(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtoService.exibirMensagem(
        'SISTEMA',
        `${this.produto.nome} foi atualizado com sucesso. ID: ${this.produto.id}`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }
}
