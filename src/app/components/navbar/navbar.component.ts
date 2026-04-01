import { Component, OnInit, HostListener, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  isScrolled = signal(false);
  isDark = signal(true);
  menuOpen = signal(false);

  navLinks = [
    { label: 'about', href: '#about' },
    { label: 'skills', href: '#skills' },
    { label: 'contact', href: '#contact' },
  ];

  ngOnInit(): void {
    const theme = document.documentElement.getAttribute('data-theme');
    this.isDark.set(theme !== 'light');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleTheme(): void {
    const next = this.isDark() ? 'light' : 'dark';
    this.isDark.set(!this.isDark());
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  scrollTo(href: string): void {
    this.menuOpen.set(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
