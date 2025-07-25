import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '@shared/layout/top-bar/top-bar.component';
import { BottomBarComponent } from '@shared/layout/bottom-bar/bottom-bar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TopBarComponent,
    BottomBarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent { 
  constructor() {
    console.log('🔧 LayoutComponent constructor called');
  }
}