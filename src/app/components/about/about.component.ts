import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  icon: string;
  highlight?: boolean;
}

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  timeline: TimelineItem[] = [
    {
      period: "Dec 2024 — Present",
      role: "Frontend Developer",
      company: "Angular Specialist",
      description:
        "Architecting scalable Angular applications with a focus on performance and user delight. Building component libraries, implementing complex state management, and driving technical decisions that impact product quality.",
      tags: ["Angular 17+", "TypeScript", "RxJS", "SCSS", "REST APIs"],
      icon: "⚡",
      highlight: true,
    },
    {
      period: "Dec 2022 — Dec 2024",
      role: "Digital Marketing",
      company: "Cross-functional Role",
      description:
        "Bridging the gap between product and growth. Leveraging frontend skills to build landing pages, optimize conversion flows, and implement analytics — a dual perspective that sharpens product thinking.",
      tags: ["SEO", "Analytics", "Landing Pages", "A/B Testing"],
      icon: "📈",
    },
    {
      period: "Dec 2021 — Dec 2022",
      role: "The Beginning",
      company: "Self-taught Journey",
      description:
        "Started with curiosity — broke things, fixed things, learned everything. Committed to mastering frontend engineering the hard way: by building real products and shipping real code.",
      tags: ["HTML", "CSS", "JavaScript", "PHP Basics"],
      icon: "🌱",
    },
  ];

  traits = [
    { label: "Performance Obsessed", icon: "⚡" },
    { label: "Clean Code", icon: "✨" },
    { label: "UX-Driven Thinking", icon: "🎯" },
    { label: "Continuous Learner", icon: "📚" },
  ];

  ngOnInit(): void {
    this.initReveal();
  }

  private initReveal(): void {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach(
            (e) => e.isIntersecting && e.target.classList.add("visible"),
          ),
        { threshold: 0.12 },
      );
      document
        .querySelectorAll(".reveal")
        .forEach((el) => observer.observe(el));
    }, 100);
  }
}
