import { Component, OnInit } from "@angular/core";
import { Item } from "@src/app/models/item";
import { ItemApiService } from "@src/app/services/items-api/item-api.service";
import * as TNSPhone from 'nativescript-phone';

@Component({
    selector: "ns-phone-logs",
    templateUrl: "./phone-logs.page.html",
    styleUrls: ["./phone-logs.page.css"]
})
export class PhoneLogsPage implements OnInit {
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
    /// Dial a phone number.
    call(phoneNumber: any) {
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
