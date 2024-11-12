import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits-component',
  templateUrl: './fruits-component.component.html',
  styleUrls: ['./fruits-component.component.css']
})
export class FruitsComponentComponent {
  fruits = [
    { name: 'Mela', emoji: '🍎' },
    { name: 'Banana', emoji: '🍌' },
    { name: 'Ciliegia', emoji: '🍒' },
    { name: 'Anguria', emoji: '🍉' },
    { name: 'Uva', emoji: '🍇' },
    { name: 'Arancia', emoji: '🍊' },
    { name: 'Pera', emoji: '🍐' },
    { name: 'Ananas', emoji: '🍍' },
    { name: 'Kiwi', emoji: '🥝' },
    { name: 'Pesca', emoji: '🍑' },
    { name: 'Fragola', emoji: '🍓' }
  ];
}
