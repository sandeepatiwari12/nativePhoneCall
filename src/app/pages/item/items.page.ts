import { Component, OnInit } from "@angular/core";

import { Item } from "../../models/item";
import { ItemApiService } from "@src/app/services/items-api/item-api.service";

@Component({
	selector: "ns-items",
	templateUrl: "./items.page.html",
	styleUrls: ['./items.page.css']
})
export class ItemsPage implements OnInit {
	items: Array<Item> = [];
	isBusy: boolean = false;

	constructor(private itemService: ItemApiService) { }

	ngOnInit(): void {
		this.getItems();

	}
	getItems() {
		this.isBusy = true;
		setTimeout(() => {
		this.items = this.itemService.getItems();
		this.isBusy = false
		}, 2000);
	}
}
