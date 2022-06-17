import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  anuncio = `O ${this.nomeProduto} está em promoção!`;
  idProduto: number = 3;
  precoProduto: number = 2.59;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade: string = '2022-12-31'

  constructor() {
    console.log('Nome produto: ', this.nomeProduto);
    console.log('Anúncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);
  }

  ngOnInit(): void {
  }

}
