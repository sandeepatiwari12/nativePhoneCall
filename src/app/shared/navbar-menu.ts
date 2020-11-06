import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar-menu',
	template: `
<li class="nav-item" [ngClass]="{active: isCurrentRoute('items')}">
	<a class="nav-link" [routerLink]="['/', 'app', 'items']">Items <span *ngIf="isCurrentRoute('items')" class="sr-only">(current)</span></a>
</li>
<li class="nav-item" [ngClass]="{active: isCurrentRoute('random')}">
	<a class="nav-link" [routerLink]="['/', 'app', 'random']">Random <span *ngIf="isCurrentRoute('random')" class="sr-only">(current)</span></a>
</li>`
})
export class NavbarMenu {

	constructor(private router: Router) { }

	ngOnInit() { }

	isCurrentRoute(routes: string | Array<string>): boolean {
		if (typeof routes == 'string') {
			routes = [routes];
		}
		return (routes as Array<string>).some((route) => {
			return this.router.url.split('/')[2] == route;
		});
	}
}
