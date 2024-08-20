// tslint:disable
import {
	Component,
	OnInit,
	ViewChild,
	OnDestroy,
	Output,
	EventEmitter,
	HostListener
} from "@angular/core";

// third party
import * as wjcCore from "wijmo/wijmo";
import * as wjGrid from "wijmo/wijmo.grid";
import {
	WjGridModule,
	WjFlexGrid,
	WjFlexGridColumn,
	WjFlexGridCellTemplate
} from "wijmo/wijmo.angular2.grid";

// local
import { MethodService } from "../../services/method.service";

@Component({
	selector: "me-compscv",
	templateUrl: "./me-compscv.component.html",
	styleUrls: ["./me-compscv.component.scss"]
})
export class MeCompsComponentCV implements OnInit, OnDestroy {
	@ViewChild("compsflex") flex: WjFlexGrid;
	@Output() selectedRowChanged: EventEmitter<string> = new EventEmitter<
		string
	>();

	info: any;
	//data: wjcCore.ObservableArray;
	data: wjcCore.CollectionView;
	errorMessage: string;

	constructor(private methodService: MethodService) {}

	ngOnInit() {}

	ngAfterViewInit() {}

	ngOnDestroy() {}

	async onGridInit() {
		try {
			this.info = await this.methodService.getComponentsAsync("1");

			if (this.info === undefined || this.info === null) {
				this.errorMessage = "Error getting data";
				return;
			}

			this.createColumns(this.info);
			this.data = new wjcCore.CollectionView(this.info.data);

			this.data.trackChanges = true;
		} catch (error) {
			this.errorMessage = error;
		}
		
	}

	createColumns(info) {
		this.flex.autoGenerateColumns = false;
		this.flex.columns.clear();

		for (let i = 0; i < info.columns.length; i++) {
			this.flex.columns.push(
				new wjGrid.Column({
					binding: info.columns[i].bindingKey,
					header: info.columns[i].label,
					width: "*",
					minWidth: 20
				})
			);
		}
	}

	onSelectionChanged(e) {
		let row: string = e.row + 1;
		this.selectedRowChanged.emit(row);
	}

	onResize() {
		this.flex.refresh();
	}
	@HostListener('window:beforeunload', ['$event'])
	beforeunloadHandler($event)
	{
		console.log($event);
		// When $event.returnValue is set to true then a web confirm dialog box will
		// be shown. If the user really does want to leave the unload event will be
		// fired and we will save the method synchronously.
		$event.returnValue = true;
		return true;
	}

	@HostListener('window:unload', ['$event'])
	unloadHandler($event)
	{
		// Save the method synchronously (async won't work since the tab/browsewr
		// won't exist anymore).
		console.log("unloaded");
	}
}
