import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";

interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: { name: string; level: number }[];
}

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: "Core Framework",
      icon: "⚡",
      color: "#dd0031",
      skills: [
        { name: "Angular 17+", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "RxJS / Observables", level: 78 },
        { name: "Angular Material", level: 75 },
      ],
    },
    {
      category: "Styling & UI",
      icon: "🎨",
      color: "#00ffa3",
      skills: [
        { name: "SCSS / Sass", level: 90 },
        { name: "CSS3 / Animations", level: 88 },
        { name: "Responsive Design", level: 92 },
        { name: "Flexbox / Grid", level: 90 },
      ],
    },
    {
      category: "Fundamentals",
      icon: "🔧",
      color: "#3b82f6",
      skills: [
        { name: "HTML5 / Semantic", level: 95 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "REST APIs", level: 82 },
        { name: "Git / GitHub", level: 80 },
        // { name: "Web Performance", level: 75 },
      ],
    },
    {
      category: "Tools & Ecosystem",
      icon: "🛠️",
      color: "#7c3aed",
      skills: [
        { name: "VS Code", level: 92 },
        { name: "Webpack / Vite", level: 65 },
        { name: "Chrome DevTools", level: 85 },
        { name: "Netlify / Vercel", level: 78 },
      ],
    },
  ];

  techBadges = [
    "Angular",
    "TypeScript",
    "RxJS",
    "SCSS",
    "HTML5",
    "JavaScript",
    "REST APIs",
    "Git",
    "Webpack",
    "CSS3",
    "Responsive UI",
  ];
}
