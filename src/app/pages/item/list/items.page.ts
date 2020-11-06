import { Component, OnInit } from "@angular/core";
import * as TNSPhone from 'nativescript-phone';

import { Item } from "../../../models/item";
import { ItemApiService } from "@src/app/services/items-api/item-api.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.page.html"
})
export class ItemsPage implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemApiService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

	/// Dial a phone number.
	call() {
		const phoneNumber = '7718881681';
		TNSPhone.requestCallPermission('You should accept the permission to be able to make a direct phone call.')
			.then((res) => {
				const callRes = TNSPhone.dial(phoneNumber, false);
				console.log('Call Response', callRes);
			})
			.catch(() => {
				const catchCallRes = TNSPhone.dial(phoneNumber, true);
				console.log('on catch block response: ', catchCallRes);

			});
	}
}
