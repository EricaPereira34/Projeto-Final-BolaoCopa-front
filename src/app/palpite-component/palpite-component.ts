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

  palpite: Palpite = {
    id: 0,
    participante: '',
    timeA: '',
    timeB: '',
    golsTimeA: 0,
    golsTimeB: 0
  };

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

  salvar(): void {
    if (this.palpite.id === 0) {
      this.service.save(this.palpite).subscribe({
        next: () => {
          this.listarPalpites();
          this.limparFormulario();
        },
        error: (erro) => {
          console.log(erro);
        }
      });
    } else {
      this.service.update(this.palpite.id, this.palpite).subscribe({
        next: () => {
          this.listarPalpites();
          this.limparFormulario();
        },
        error: (erro) => {
          console.log(erro);
        }
      });
    }
  }

  editar(palpite: Palpite): void {
    this.palpite = { ...palpite };
  }

  excluir(id: number): void {
    this.service.delete(id).subscribe({
      next: () => {
        this.listarPalpites();
      },
      error: (erro) => {
        console.log(erro);
      }
    });
  }

  limparFormulario(): void {
    this.palpite = {
      id: 0,
      participante: '',
      timeA: '',
      timeB: '',
      golsTimeA: 0,
      golsTimeB: 0
    };
  }
}
