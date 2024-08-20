import { Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// third party
import { WjGridModule, WjFlexGrid, WjFlexGridCellTemplate } from 'wijmo/wijmo.angular2.grid';

// local
import { MethodService } from '../../services/method.service';

import { MeCompsComponent } from './me-comps.component';

describe('MeCompsComponent', () => 
{
	let component: MeCompsComponent;
	let fixture: ComponentFixture<MeCompsComponent>;
	let methodService: MethodServiceMock;

	beforeEach(async(() => 
	{
		methodService = new MethodServiceMock();

		TestBed.configureTestingModule({
			declarations: [
				MeCompsComponent, 
				WjFlexGrid, 
				WjFlexGridCellTemplate
			],
			providers: [
				{ provide: MethodService, useValue: methodService },
			],
			imports: [
				HttpModule
			]
		})
			.compileComponents();
	}));

	it('should create', async(() => 
	{
		methodService.testMethodInfo = methodService.testMethodInfoNew;
		fixture = TestBed.createComponent(MeCompsComponent);
		component = fixture.componentInstance;
		component.flex.refreshCells(true);
		fixture.detectChanges();

		fixture.whenStable().then(() =>
		{
			expect(component).toBeTruthy();
		});
	}));

	it('should add 7 columns', async(() => 
	{
		methodService.testMethodInfo = methodService.testMethodInfoNew;
		fixture = TestBed.createComponent(MeCompsComponent);
		component = fixture.componentInstance;
		component.flex.refreshCells(true);
		fixture.detectChanges();
		
		fixture.whenStable().then(() => 
		{
			fixture.detectChanges();
            expect(component.flex.columns.length).toEqual(7);
		}); //whenStable
	}));  //async 

	it('should start with 2 rows', async(() => 
	{
		methodService.testMethodInfo = methodService.testMethodInfoRows;
		fixture = TestBed.createComponent(MeCompsComponent);
		component = fixture.componentInstance;
		component.flex.refreshCells(true);
		fixture.detectChanges();

		fixture.whenStable().then(() => 
		{
			fixture.detectChanges();

			fixture.whenStable().then(() => 
			{
                expect(component.flex.rows.length).toEqual(3);                
			}); //whenStable
		}); //whenStable
	}));  //async

	it('should delete one row', async(() =>
	{
		methodService.testMethodInfo = methodService.testMethodInfoRows;
		fixture = TestBed.createComponent(MeCompsComponent);
		component = fixture.componentInstance;
		component.flex.refreshCells(true);
		fixture.detectChanges();

		fixture.whenStable().then(() => 
		{
			fixture.detectChanges();
			expect(component.flex.rows.length).toEqual(3);
			component.flex.rows[0].isSelected = true;
			component.onDelete();
			
			expect(component.flex.rows.length).toEqual(2);
		});
	}));

	it('should delete all rows', async(() => 
	{
		methodService.testMethodInfo = methodService.testMethodInfoRows;
		fixture = TestBed.createComponent(MeCompsComponent);
		component = fixture.componentInstance;
		component.flex.refreshCells(true);
		fixture.detectChanges();

		fixture.whenStable().then(() => 
		{
			fixture.detectChanges();
			expect(component.flex.rows.length).toEqual(3);
            component.flex.selectedRows = component.flex.rows;                    
			component.onDelete();
			expect(component.flex.rows.length).toEqual(0);
		});
	}));
});

class MethodServiceMock
{
	testMethodInfo: any;

	testMethodInfoNew =
	{
		"columns": [
			{
				"id": 0,
				"key": "name",
				"label": "Name"
			},
			{
				"id": 1,
				"key": "label",
				"label": "Label"
			},
			{
				"id": 2,
				"key": "expectedRetTime",
				"label": "Expected RT"
			},
			{
				"id": 3,
				"key": "expectedWavelength",
				"label": "Expected Wavelength"
			},
			{
				"id": 4,
				"key": "isInternalStd",
				"label": "Internal Standard?"
			},
			{
				"id": 5,
				"key": "useInternalStd",
				"label": "Use internal standard"
			},
			{
				"id": 6,
				"key": "description",
				"label": "Description"
			}
		],
		"data": null,
		"fields": null
	}

	testMethodInfoRows =
	{
		"columns": [
			{
				"id": 0,
				"key": "name",
				"label": "Name"
			},
			{
				"id": 1,
				"key": "label",
				"label": "Label"
			},
			{
				"id": 2,
				"key": "expectedRetTime",
				"label": "Expected RT"
			},
			{
				"id": 3,
				"key": "expectedWavelength",
				"label": "Expected Wavelength"
			},
			{
				"id": 4,
				"key": "isInternalStd",
				"label": "Internal Standard?"
			},
			{
				"id": 5,
				"key": "useInternalStd",
				"label": "Use internal standard"
			},
			{
				"id": 6,
				"key": "description",
				"label": "Description"
			}
		],
		"data": [
			{
				"id": 1,
				"name": "Comp1",
				"label": "Label1",
				"expectedRetTime": "1.1",
				"expectedWavelength": "1.1",
				"isInternalStd": false,
				"useInternalStd": "",
				"description": "Description of Comp1"
			},
			{
				"id": 2,
				"name": "Comp2",
				"label": "Label2",
				"expectedRetTime": "2.2",
				"expectedWavelength": "2.2",
				"isInternalStd": true,
				"useInternalStd": "",
				"description": "Description of Comp2"
			},
			{
				"id": 3,
				"name": "Comp2",
				"label": "Label2",
				"expectedRetTime": "2.2",
				"expectedWavelength": "2.2",
				"isInternalStd": true,
				"useInternalStd": "",
				"description": "Description of Comp2"
			}
		]
	}

	async getComponentsAsync(methodId: any): Promise<Object>
	{
		if (this.testMethodInfo === null)
		{
			throw ("Error in service");
		}

		return await (this.testMethodInfo);
	}
}