import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  name = signal("");
  email = signal("");
  subject = signal("");
  message = signal("");
  submitted = signal(false);
  submitting = signal(true);

  contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "prakshiltripathi@gmail.com",
      href: "mailto:prakshiltripathi@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Prakshil Tripathi | Frontend Developer (Angular)",
      href: "https://in.linkedin.com/in/prakshil-tripathi-frontend-developer",
    },
    {
      icon: "📍",
      label: "Location",
      value: "India · Open to Remote",
      href: null,
    },
  ];

  onSubmit(): void {
    if (!this.name() || !this.email() || !this.message()) return;

    this.submitting.set(true);

    // Simulate async submit (replace with real backend/formspree)
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 1800);
  }

  resetForm(): void {
    this.name.set("");
    this.email.set("");
    this.subject.set("");
    this.message.set("");
    this.submitted.set(false);
  }
}
