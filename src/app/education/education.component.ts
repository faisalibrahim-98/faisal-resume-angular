import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'education-component',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent implements OnInit {
  educationList = [
    {
      institution: 'Kingston University',
      logo: 'assets/kingston.svg',
      degree: 'MSc Software Engineering With Placement Year',
      duration: '2022 - 2024',
      description: 'Elective: User Experience Design',
      location: 'London, UK',
    },
    {
      institution: 'University B',
      logo: 'assets/ned.svg',
      degree: 'BE Computer Information System Engineering',
      duration: '2016 - 2020',
      description: 'Elective: Computer System Security',
      location: 'Karachi, PK',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
