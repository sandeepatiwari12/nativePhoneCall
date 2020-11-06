import { Routes } from '@angular/router';

import { ContainerComponent } from '@src/app/shared/container/container.component';

import { HomePage } from '@src/app/pages/home/home.page';
import { ItemsPage } from './pages/item/list/items.page';


export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full', },
	{ path: 'home', component: HomePage, },
	{
		path: 'app', component: ContainerComponent, children: [
			{ path: '', redirectTo: '/items', pathMatch: 'full' },
			{ path: 'items', component: ItemsPage, }
		]
	}
];
