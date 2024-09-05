import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'technology-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent implements OnInit {
  isTechStackVisible: boolean = false;

  techStack = [
    { name: 'Angular', logo: 'assets/angular.svg' },
    { name: 'Vue', logo: 'assets/vue.svg' },
    { name: 'Typescript', logo: 'assets/typescript.svg' },
    { name: 'JavaScript', logo: 'assets/javascript.svg' },
    { name: 'Tailwind', logo: 'assets/tailwind.svg' },
    { name: 'NodeJS', logo: 'assets/nodejs.svg' },
    { name: 'HTML', logo: 'assets/html.svg' },
    { name: 'CSS', logo: 'assets/css.svg' },
    { name: 'SQL', logo: 'assets/sql.svg' },
    { name: 'PostgreSQL', logo: 'assets/postgresql.svg' },
    { name: 'GraphQL', logo: 'assets/graphql.svg' },
    { name: 'Cypress', logo: 'assets/cypress.svg' },
    { name: 'Jest', logo: 'assets/jest.svg' },
    { name: 'C++', logo: 'assets/c++.svg' },
  ];
  constructor() {}

  ngOnInit() {}

  toggleTechStack() {
    this.isTechStackVisible = !this.isTechStackVisible;
  }

  trackByTech(index: number, tech: any): string {
    return tech.name;
  }
}
