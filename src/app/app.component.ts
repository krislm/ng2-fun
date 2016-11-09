import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import {MdSidenav, MdToolbar} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  recipes = [
    {rows: 2, title: 'Havregrynscookies', image: './recipes/Havregrynscookies.png'},
    {rows: 2, title: 'Havregrynscookies', image: './recipes/Havregrynscookies.png'},
    {rows: 2, title: 'Havregrynscookies', image: './recipes/Havregrynscookies.png'},
    {rows: 2, title: 'Havregrynscookies', image: './recipes/Havregrynscookies.png'},
    {rows: 2, title: 'Havregrynscookies', image: './recipes/Havregrynscookies.png'}
  ];

  currentRecipe = {};

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(public vcr: ViewContainerRef) {}

  closeRecipe() {
      this.currentRecipe = {};
      this.sidenav.close();
  }

  showRecipe(recipe) {
    this.currentRecipe = recipe;
    this.sidenav.open();
  }
}
