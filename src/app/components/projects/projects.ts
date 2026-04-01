import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Gráfico de vendas e pagamentos',
      description: 'Gráfico de vendas e pagamentos com Angular.',
      image: 'images/projects/chart1.png',
      tags: ['Angular'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Tabela de vendas e pagamentos',
      description: 'Tabela de vendas e pagamentos com Angular.',
      image: 'images/projects/chart2.png',
      tags: ['Angular'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Gráfico de linhas de vendas e informações complementares',
      description: 'Gráfico de linhas de vendas e informações complementares com Angular.',
      image: 'images/projects/chart3.png',
      tags: ['Angular', 'TypeScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Tabela de taxas de juros', 
      description: 'Tabela de taxas de juros com Angular.',
      image: 'images/projects/chart4.png',
      tags: ['Angular'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Conciliacao Bancaria',
      description: 'Conciliacao Bancaria com Angular.',
      image: 'images/projects/conciliacao-bancaria.png',
      tags: ['Angular'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Vendas Conciliadas',
      description: 'Vendas Conciliadas com Angular.',
      image: 'images/projects/vendas-conciliadas.png',
      tags: ['Angular'],
      github: '#',
      demo: '#',
    }, {
      title: 'Projeto Laços que transformam',
      description: 'Projeto Laços que transformam feito para uma ONG para arrecadar fundos. Feito com NextJs',
      image: 'images/projects/lacos-que-transformam.jpeg',
      link: 'https://www.lacosquetransformam.com.br/',
      tags: ['NextJs'],
      github: '#',
      demo: '#',
    },
  ];
}
