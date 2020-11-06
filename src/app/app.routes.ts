import { Routes } from '@angular/router';

import { ContainerComponent } from '@src/app/shared/container/container.component';

import { HomePage } from '@src/app/pages/home/home.page';
import { ItemsPage } from './pages/item/items.page';
import { AboutPage } from './pages/about/about.page';
import { PhoneLogsPage } from './pages/calls/phone-logs.page';


export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full', },
	{ path: 'home', component: HomePage, },
	{
		path: 'app',component: ContainerComponent, children: [
			{ path: '', redirectTo: '/phone-logs', pathMatch: 'full' },
			{ path: 'phone-logs', component: PhoneLogsPage, },
			{ path: 'items', component: ItemsPage, },
			{ path: 'about', component: AboutPage, }
		]
	}
];
