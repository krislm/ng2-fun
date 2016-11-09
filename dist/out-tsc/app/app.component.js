var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav } from "@angular/material";
var AppComponent = (function () {
    function AppComponent(vcr) {
        this.vcr = vcr;
        this.title = 'app works!';
        this.recipes = [
            { rows: 2, title: 'Havregrynscookies', image: './recipes/Havregrynscookies.png' },
            { rows: 2, title: 'Havregrynscookies', image: './recipes/Havregrynscookies.png' },
            { rows: 2, title: 'Havregrynscookies', image: './recipes/Havregrynscookies.png' },
            { rows: 2, title: 'Havregrynscookies', image: './recipes/Havregrynscookies.png' },
            { rows: 2, title: 'Havregrynscookies', image: './recipes/Havregrynscookies.png' }
        ];
        this.currentRecipe = {};
    }
    AppComponent.prototype.closeRecipe = function () {
        this.currentRecipe = {};
        this.sidenav.close();
    };
    AppComponent.prototype.showRecipe = function (recipe) {
        this.currentRecipe = recipe;
        this.sidenav.open();
    };
    return AppComponent;
}());
__decorate([
    ViewChild('sidenav'),
    __metadata("design:type", MdSidenav)
], AppComponent.prototype, "sidenav", void 0);
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/app.component.js.map