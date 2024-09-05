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
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Kingston_University_square_logo.svg',
      degree: 'MSc Software Engineering With Placement Year',
      duration: '2022 - 2024',
      description: 'Elective: User Experience Design',
    },
    {
      institution: 'University B',
      logo: 'https://hisaar.org/hf/wp-content/uploads/2022/08/NED-300x300-1-400x400.jpg',
      degree: 'BE Computer Information System Engineering',
      duration: '2016 - 2020',
      description: 'Elective: Computer System Security',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
