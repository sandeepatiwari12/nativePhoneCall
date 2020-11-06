import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, NativeScriptCommonModule, NativeScriptHttpClientModule, NativeScriptFormsModule } from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { AppUtils } from '@src/app/utils/app-utils/app-utils.tns';
import { HttpService } from '@src/app/services/http.service';
import { CacheService } from '@src/app/services/cache/cache.service.tns';

import { HideActionBarDirective } from '@src/app/utils/hide-action-bar/hide-action-bar.tns';
import { PlatformViewComponent } from '@src/app/utils/platform-view/platform-view.tns';
import { ContainerComponent } from '@src/app/shared/container/container.component';

import { HomePage } from '@src/app/pages/home/home.page';
import { ItemsPage } from '@src/app/pages/item/items.page';
import { ItemApiService } from '@src/app/services/items-api/item-api.service.tns';
import { PhoneLogsPage } from '@src/app/pages/calls/phone-logs.page';
import { AboutPage } from '@src/app/pages/about/about.page';


let pages = [HomePage, PhoneLogsPage, AboutPage, ItemsPage];
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
		NativeScriptModule,
		NativeScriptCommonModule,
		NativeScriptHttpClientModule,
		NativeScriptFormsModule,
		AppRoutingModule,
	],
	providers: [
		AppUtils,
		HttpService,
		ItemApiService,
		CacheService,
	],
	bootstrap: [AppComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
