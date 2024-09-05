import { ExperienceComponent } from '@/experience/experience.component';
import { TechnologyComponent } from '@/technology/technology.component';
import { EducationComponent } from '@/education/education.component';
import { ContactComponent } from '@/contact/contact.component';
import { SidebarComponent } from '@/sidebar/sidebar.component';
import { AboutComponent } from '@/about/about.component';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ExperienceComponent,
    TechnologyComponent,
    EducationComponent,
    SidebarComponent,
    ContactComponent,
    AboutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  jumpToSection(section: string | null) {
    if (section)
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
