import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { AppUtils } from '@src/app/utils/app-utils/app-utils';
import { HttpService } from '@src/app/services/http.service';
import { CacheService } from '@src/app/services/cache/cache.service';

import { XAMLModule } from '@src/app/utils/xaml/xaml.module';
import { HideActionBarDirective } from '@src/app/utils/hide-action-bar/hide-action-bar';
import { PlatformViewComponent } from '@src/app/utils/platform-view/platform-view';
import { ContainerComponent } from '@src/app/shared/container/container.component';

import { HomePage } from '@src/app/pages/home/home.page';
import { ItemApiService } from '@src/app/services/items-api/item-api.service';
import { ItemsPage } from '@src/app/pages/item/items.page';
import { PhoneLogsPage } from '@src/app/pages/calls/phone-logs.page';
import { AboutPage } from '@src/app/pages/about/about.page';




let pages = [HomePage, PhoneLogsPage, AboutPage, ItemsPage ];
let directives = [HideActionBarDirective];
let components = [PlatformViewComponent, ContainerComponent]


@NgModule({
	declarations: [
		AppComponent,
		...pages,
		...directives,
		...components,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		NgbModule,
		XAMLModule,
	],
	providers: [
		AppUtils,
		HttpService,
		ItemApiService,
		CacheService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
