import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({ providedIn: "root" })
export class ContactService {
  private http = inject(HttpClient);

  private API_URL = "https://your-vercel-domain.vercel.app/api/contact";
  // later replace with environment.ts

  sendMessage(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    return firstValueFrom(this.http.post(this.API_URL, data));
  }
}
