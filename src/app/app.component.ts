import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TableModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'media-concurso';
  public array: any[] = [];
  public text = '';

  onSubmit() {
    const dividedText = this.text.split('/');
    dividedText.map((text: string) => {
      this.array.push({
        mat: text.split(',')[0].substring(1),
        nome: text.split(',')[1].substring(1),
        not1: Number(text.split(',')[2]),
        not2: Number(text.split(',')[3]),
        notF: Number(text.split(',')[4]),
      });
    });
    this.array = this.array.sort((a, b) => b.notF - a.notF).slice(0, 4499);
  }
}
