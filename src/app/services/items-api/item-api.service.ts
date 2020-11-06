import { Injectable } from '@angular/core';

import { Item } from "@src/app/models/item";

import { HttpService } from '@src/app/services/http.service';
import { CacheService } from '@src/app/services/cache/cache.service';

@Injectable()
export class ItemApiService {

	constructor(private http: HttpService, private cache: CacheService) { }

	private items = new Array<Item>(
		{ id: 1, phoneNo: '7977026382', name: "Ter Stegen", role: "Goalkeeper" },
		{ id: 3, phoneNo: '7977026382', name: "Piqué", role: "Defender" },
		{ id: 4, phoneNo: '7977026382', name: "I. Rakitic", role: "Midfielder" },
		{ id: 5, phoneNo: '7977026382', name: "Sergio", role: "Midfielder" },
		{ id: 6, phoneNo: '7977026382', name: "Denis Suárez", role: "Midfielder" },
		{ id: 7, phoneNo: '7977026382', name: "Arda", role: "Midfielder" },
		{ id: 8, phoneNo: '7977026382', name: "A. Iniesta", role: "Midfielder" },
		{ id: 9, phoneNo: '7977026382', name: "Suárez", role: "Forward" },
		{ id: 10, phoneNo: '7977026382', name: "Messi", role: "Forward" },
		{ id: 11, phoneNo: '7977026382', name: "Neymar", role: "Forward" },
		{ id: 12, phoneNo: '7977026382', name: "Rafinha", role: "Midfielder" },
		{ id: 13, phoneNo: '7977026382', name: "Cillessen", role: "Goalkeeper" },
		{ id: 14, phoneNo: '7977026382', name: "Mascherano", role: "Defender" },
		{ id: 17, phoneNo: '7977026382', name: "Paco Alcácer", role: "Forward" },
		{ id: 18, phoneNo: '7977026382', name: "Jordi Alba", role: "Defender" },
		{ id: 19, phoneNo: '7977026382', name: "Digne", role: "Defender" },
		{ id: 20, phoneNo: '7977026382', name: "Sergi Roberto", role: "Midfielder" },
		{ id: 21, phoneNo: '7977026382', name: "André Gomes", role: "Midfielder" },
		{ id: 22, phoneNo: '7977026382', name: "Aleix Vidal", role: "Midfielder" },
		{ id: 23, phoneNo: '7977026382', name: "Umtiti", role: "Defender" },
		{ id: 24, phoneNo: '7977026382', name: "Mathieu", role: "Defender" },
		{ id: 25, phoneNo: '7977026382', name: "Masip", role: "Goalkeeper" }
	);
	getItems(): Array<Item> {
		return this.items;
	}

	getItem(id: number): Item {
		return this.items.filter((item) => item.id === id)[0];
	}

}
