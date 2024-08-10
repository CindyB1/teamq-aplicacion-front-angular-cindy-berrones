import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.styles.css']
})
export class AppComponent {
  boxes: string[] = [
    'Make 1', 'Make 2', 'Make 3', 'Make 4', 
    'Make 5', 'Make 6', 'Make 7', 'Make 8', 
    'Make 9', 'Make 10', 'Make 11', 'Alle Marken'
  ];

  cajas = [
    { title: 'NEUHEITEN', headline: 'HEADLINE 2' },
    { title: 'FINDER', headline: 'HEADLINE 2' }
  ];

  text = {
    buttonText: 'Jetzt entdecken!',
    title: 'KATEGORIEN',
    box2Text: [
      'Büro & Schreibgeräte', 'Events & Veranstaltungen', 'Freizeit & Urlaub', 
      'Gesundheit & Hygiene', 'Haus & Garten', 'Jahreszeiten & Feiertage', 
      'Lebensmittel & Getränke', 'Sport & Spiele', 'Streuartikel & Promotion', 
      'Süßigkeiten & Knabbereien', 'Taschen & Reise'
    ]
  };
}