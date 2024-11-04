import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-image-optimization',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-optimization.component.html',
  styleUrl: './image-optimization.component.css'
})
export class ImageOptimizationComponent {

  imagePath: string = 'src/assets/angular.png';

}
