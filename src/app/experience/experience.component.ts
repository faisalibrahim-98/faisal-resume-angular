import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experience-component',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  workExperiences = [
    {
      company: 'Optrak Distribution Software Ltd.',
      logo: 'https://optrak.com/wp-content/themes/optrak2020/images/logo.jpg',
      position: 'TypeScript Developer',
      duration: 'Oct 2022 - Present',
      location: 'Ware, UK',
      description:
        'Developed a viewer from scratch using Vue 3, GraphQL, and Open Layers with a focus on testing. \
        Contributed extensively to Software Requirement Specification documents and created a tool for fetching \
        and displaying data from GraphQL. Integrated Open Layers for routing information and ensured code quality \
        with linting and pre-commit hooks. Implemented unit and E2E tests using Cypress and Vitest, maintaining test \
        coverage above 90%. Demonstrated a customer-specific prototype, built an AWS Lambda for customized CSV generation, \
        and utilized Docker for product deployment. Incorporated Vuex for state management, evaluated ReactJS benefits \
        and developed .NET microservices for basic CRUD operations.',
    },
    {
      company: '10 Pearls',
      logo: 'https://apn-portal.my.salesforce.com/servlet/servlet.ImageServer?id=0150L00000ALRoqQAH&oid=00DE0000000c48tMAA',
      position: 'Software Engineer Grade III',
      duration: 'Dec 2020 - Sep 2022',
      location: 'Karachi, PK',
      description:
        'Worked extensively on frontend development with Angular 8 and 13, maintaining project documentation.\
         Developed a recruitment platform frontend with Angular 13 and backend features with NodeJS. Contributed \
         to bidirectional data sync between the main application and Salesforce. Collaborated on the frontend \
         of a telemedicine health portal using Angular 13 and GraphQL, establishing a scalable architecture. \
         Progressed from junior resource to leading immediate deliverables. Implemented unit tests with Karma \
         for a healthcare application. Enhanced productivity by 25% through clear sprint goals and tasks, \
         optimized key libraries like RxJs, and removed technical debt. Regularly collaborated with clients, \
         demonstrating new features and meeting sprint deadlines.',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
