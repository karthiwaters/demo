import { Component, OnInit, ViewChild, OnDestroy, Input, Output, EventEmitter, HostListener} from '@angular/core';

// third party
import * as wjcCore from 'wijmo/wijmo';
import * as wjGrid from 'wijmo/wijmo.grid';
import { WjGridModule, WjFlexGrid, WjFlexGridColumn, WjFlexGridCellTemplate } from 'wijmo/wijmo.angular2.grid';

// local
import { MethodService } from '../../services/method.service';

@Component({
	selector: 'me-comps',
	templateUrl: './me-comps.component.html',
	styleUrls: ['./me-comps.component.scss'],
})

export class MeCompsComponent implements OnInit, OnDestroy
{
	@ViewChild('compsflex') flex: WjFlexGrid;
    @Input() rowId: string;
    @Input() componentId: string;    
    @Output() componentChanged :EventEmitter<string> = new EventEmitter<string>(true);

	info: any;
	data: wjcCore.ObservableArray;
	errorMessage: string;
	rowToSelect: number;
	fromOnGridInit: boolean;

	constructor(private methodService: MethodService) 
	{
		this.fromOnGridInit = false;
        this.rowId = '1';
	}

	ngOnInit() 
	{
		this.rowToSelect = -1;
        this.onGridInit();        
	}

	ngOnDestroy() 
	{
		if (this.flex !== undefined && this.flex !== null)
		{
			this.flex.onLoadedRows = null;
		}
	}

	async onGridInit() 
	{
		try
		{
            // need to turn off selection mode when giving table new data as the 
            // table insists on calling onSelectionChanged with the wrong selected row number            
            this.flex.selectionMode = wjGrid.SelectionMode.None;

            if (this.rowId == undefined)
            {
                return;
            }
			this.info = await this.methodService.getComponentsAsync(this.rowId);

			if (this.info === undefined || this.info === null)
			{
				this.errorMessage = 'Error getting data';
				return;
			}
	
			this.createColumns(this.info);
			this.data = new wjcCore.ObservableArray(this.info.data);

            this.rowToSelect = 0;
            if (this.info != null && this.info.data != null)
            {            
                for (let i = 0; i < this.info.data.length; i++)
                {
                    if (this.componentId  === this.info.data[i].name)
                    {
                        this.rowToSelect = i;
                        console.log ("row to select", this.rowToSelect);
                        break;
                    }
                }
                
                this.fromOnGridInit = true;
				this.flex.onLoadedRows = (e: any) => this.onLoadedRows(e);          
				
            }
		}
		catch (error) 
		{
			this.errorMessage = error;
		}
	}

	onLoadedRows(e?: wjcCore.EventArgs): void
	{   
		if (!this.fromOnGridInit || this.flex.rows == undefined || this.flex.rows == null ||
			this.flex.rows.length <= this.rowToSelect) return;

        // need to turn back on row selection mode here!!
        // ListBox mode allows deleting multiple rows at once
        this.flex.selectionMode = wjGrid.SelectionMode.ListBox;
		this.flex.scrollIntoView(this.rowToSelect, 0);
		this.flex.select(this.rowToSelect, 0);
		//this.flex.focus();

		this.fromOnGridInit = false;
	}

	createColumns(info)
	{
		this.flex.autoGenerateColumns = false;
		this.flex.columns.clear();

		for (let i = 0; i < info.columns.length; i++) 
		{
			this.flex.columns.push(new wjGrid.Column(
				{
					binding: info.columns[i].bindingKey,
					header: info.columns[i].label,
					width: '*',
					minWidth: 20
				}));
		}     
	}

	onDelete() 
	{
		//This doesn't work; removes correct number of rows, but wrong ones.
		//Selection gets changed during deletion?
		//for (let i = this.flex.selectedRows.length - 1; i >= 0; i--) 
		//{
		//this.data.removeAt(this.flex.selectedRows[i].index);
		//this.flex.refresh();
		//}

		var selected = [];      
		for (var i = 0; i < this.flex.selectedRows.length; i++) 
		{
			selected.push(this.flex.selectedRows[i]._idx);
		}

		for (var i = selected.length - 1; i >= 0; i--) 
		{
			this.data.removeAt(selected[i]);
		}
		//this.flex.focus();
	}

	onSelectionChanged(e)
	{
		if (e.row !== -1)
		{
			let name = this.flex.rows[e.row].dataItem.name;       
			
			this.componentChanged.emit(name);
		}
	}

    onResize()
    {
        this.flex.refresh();
	}
}
