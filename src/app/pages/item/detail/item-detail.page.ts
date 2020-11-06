import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "../../../models/item";
import { ItemApiService } from "@src/app/services/items-api/item-api.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.page.html",
})
export class ItemDetailPage implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemApiService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }
}
