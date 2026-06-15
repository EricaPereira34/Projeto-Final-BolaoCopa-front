import { Component, OnInit } from '@angular/core';
import { Palpite } from '../palpite';
import { PalpiteService } from '../palpite-service';

@Component({
  selector: 'app-palpite-component',
  standalone: false,
  templateUrl: './palpite-component.html',
  styleUrl: './palpite-component.css',
})
export class PalpiteComponent implements OnInit {

  palpites: Palpite[] = [];

  constructor(private service: PalpiteService) { }

  ngOnInit(): void {
    this.listarPalpites();
  }

  listarPalpites(): void {
    this.service.getAll().subscribe({
      next: (dados) => {
        this.palpites = dados;
      },
      error: (erro) => {
        console.log(erro);
      }
    });
  }
}
