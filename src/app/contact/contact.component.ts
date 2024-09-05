import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-component',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [CommonModule],
})
export class ContactComponent implements OnInit {
  linkedin = 'https://www.linkedin.com/in/m-faisal-ibrahim/';
  mailto = 'mailto:m_faisal_98@hotmail.com';
  selectedIcon: string | null = null;
  email = 'm_faisal_98@hotmail.com';
  tel = 'tel:+447471389435';
  phone = '+447471389435';
  showPopup = false;

  constructor() {}

  ngOnInit() {}

  openPopup(icon: string) {
    this.selectedIcon = icon;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedIcon = null;
  }
}
