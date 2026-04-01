import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    { name: 'Angular', icon: 'A', level: 90, color: '#DD0031' },
    { name: 'TypeScript', icon: 'TS', level: 85, color: '#3178C6' },
    { name: 'JavaScript', icon: 'JS', level: 90, color: '#F7DF1E' },
    { name: 'HTML/CSS', icon: 'H', level: 95, color: '#E34F26' },
    { name: 'Node.js', icon: 'N', level: 80, color: '#339933' },
    { name: 'Git', icon: 'G', level: 85, color: '#F05032' },
    { name: '.NET', icon: 'NET', level: 80, color: '#512BD4' },
    { name: 'SQL Server', icon: 'SQL', level: 80, color: '#CC2927' },
    { name: 'C#', icon: 'C#', level: 80, color: '#9933CC' },
  ];
}
