import { Component, ViewChild } from '@angular/core';

 import * as wjcCore from 'wijmo/wijmo';
import { setLicenseKey } from 'wijmo/wijmo'; 

import { MeCompsComponent } from './components/me-comps/me-comps.component'
import { MeCompsComponentCV } from './components/me-compscv/me-compscv.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild('topTable') meCompsTableComponent: MeCompsComponent;
	@ViewChild('bottomTable') meCompsCVTableComponent: MeCompsComponentCV;    

    title = 'FlexGrid Demo Application';
    selectedRow : string = '1';
    componentId : string = 'Comp1';
    offsetHeight : number;
    splitterMoveCount : number = 0;

    selecteRowChanged(row : string)
    {
        this.selectedRow = row;
    }

    componentChanged(id : string)
    {
        this.componentId = id;
    }

    dragStart()
    {
        this.splitterMoveCount = 0;
        this.offsetHeight = 0;
        if (this.meCompsTableComponent !== null)
        {
            this.offsetHeight = this.meCompsTableComponent.flex.hostElement.offsetHeight;        
        }
    }    

    dragBetweenTables()
    {
        this.splitterMoveCount++;
        let currentOffsetHeight = 0;

        // only refresh the tables if the splitter has been moved 10 times 
        // to cut down on table refreshes.         
        if (this.splitterMoveCount % 10 === 0)
        {
            this.refreshTables();
        }               
    } 



    dragEnd()
    {
        this.refreshTables();
    }    
 
    refreshTables()
    {
        // the idea here is to only refresh the top table if the splitter is moved dowm or
        // the bottom table if ths splitter is moved up. The table itself handles refreshing 
        // properly if the table height is getting smaller
        if (this.meCompsTableComponent !== null)
        {        
            let currentOffsetHeight = this.meCompsTableComponent.flex.hostElement.offsetHeight;        
            if (currentOffsetHeight > this.offsetHeight)
            {
                this.meCompsTableComponent.onResize();                   
            }
            else if (currentOffsetHeight < this.offsetHeight && this.meCompsCVTableComponent !== null)
            {
                this.meCompsCVTableComponent.onResize();                    
            }
        }          
    }

}
