import {
  Component, OnInit, OnDestroy, ChangeDetectionStrategy,
  ChangeDetectorRef, ElementRef, HostListener, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = signal('');
  showCursor = signal(true);
  typingDone = signal(false);
  mouseX = signal(50);
  mouseY = signal(50);

  private readonly fullText = 'Frontend Developer (Angular)';
  private typeInterval?: ReturnType<typeof setInterval>;
  private cursorInterval?: ReturnType<typeof setInterval>;

  constructor(private cdr: ChangeDetectorRef, private el: ElementRef) {}

  ngOnInit(): void {
    this.startTypewriter();
    this.startCursorBlink();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    this.mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  private startTypewriter(): void {
    let i = 0;
    const delay = 65;
    this.typeInterval = setInterval(() => {
      if (i < this.fullText.length) {
        this.displayText.set(this.fullText.slice(0, ++i));
        this.cdr.markForCheck();
      } else {
        clearInterval(this.typeInterval);
        this.typingDone.set(true);
        this.cdr.markForCheck();
      }
    }, delay);
  }

  private startCursorBlink(): void {
    this.cursorInterval = setInterval(() => {
      this.showCursor.set(!this.showCursor());
      this.cdr.markForCheck();
    }, 530);
  }

  scrollToAbout(): void {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact(): void {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    clearInterval(this.typeInterval);
    clearInterval(this.cursorInterval);
  }
}
