import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class MethodService
{
	private baseUrl: string;
	private methodBaseUrl: string;
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private options = new RequestOptions({ headers: this.headers });
	public selectedComponentId: string;
	public selectedProcCompId: string;

	constructor(private http: Http)
	{
	}

	async getComponentsAsync(methodId: any): Promise<Object>
	{
		try
		{
            for (let i = 0; i < 10000000; i++)
            {

            }
            if (methodId == '1' || methodId == '3' || methodId == '5')
            {
			    return (await this.compsData);
            }
            else
            {
			    return (await this.compsData2);
            }
		}
		catch (error)
		{
			throw this.handleError(error);
		}
	}

	private handleError(error: any)
	{
		let msg = (error.message)
			? error.message
			: error.status ? `${error.status} - ${error.statusText}` : error;

		console.error(msg);
		return msg;
	}

	compsData =
	{
		'columns': [
			{
				'id': 0,
				'bindingKey': 'name',
				'label': 'Name'
			},
			{
				'id': 1,
				'bindingKey': 'label',
				'label': 'Label'
			},
			{
				'id': 2,
				'bindingKey': 'expectedRetTime',
				'label': 'Expected RT'
			},
			{
				'id': 3,
				'bindingKey': 'expectedWavelength',
				'label': 'Expected Wavelength'
			},
			{
				'id': 4,
				'bindingKey': 'description',
				'label': 'Description'
			}
		],
		'data': [
			{
				'id': 1,
				'name': 'Comp1',
				'label': 'Label1',
				'expectedRetTime': 1.1,
				'expectedWavelength': 1.1,
				'description': 'Description of Comp1'
			},
			{
				'id': 2,
				'name': 'Comp2',
				'label': 'Label2',
				'expectedRetTime': 2.2,
				'expectedWavelength': 2.2,
				'description': 'Description of Comp2'
			},
			{
				'id': 3,
				'name': 'Comp3',
				'label': 'Label3',
				'expectedRetTime': 3.3,
				'expectedWavelength': 3.3,
				'description': 'Description of Comp3'
			},
			{
				'id': 4,
				'name': 'Comp4',
				'label': 'Label4',
				'expectedRetTime': 4.4,
				'expectedWavelength': 4.4,
				'description': 'Description of Comp4'
			},
			{
				'id': 5,
				'name': 'Comp5',
				'label': 'Label5',
				'expectedRetTime': 5.5,
				'expectedWavelength': 5.5,
				'description': 'Description of Comp5'
			},
			{
				'id': 6,
				'name': 'Comp6',
				'label': 'Label6',
				'expectedRetTime': 6.6,
				'expectedWavelength': 6.6,
				'description': 'Description of Comp6'
			}
		]
	}

	compsData2 =
	{
		'columns': [
			{
				'id': 0,
				'bindingKey': 'name',
				'label': 'Name'
			},
			{
				'id': 1,
				'bindingKey': 'label',
				'label': 'Label'
			},
			{
				'id': 2,
				'bindingKey': 'expectedRetTime',
				'label': 'Expected RT'
			},
			{
				'id': 3,
				'bindingKey': 'expectedWavelength',
				'label': 'Expected Wavelength'
			},
			{
				'id': 4,
				'bindingKey': 'description',
				'label': 'Description'
			}
		],
		'data': [
			{
				'id': 1,
				'name': 'Comp1',
				'label': 'Label1111',
				'expectedRetTime': 1.1111,
				'expectedWavelength': 1.11111,
				'description': 'Description of Comp11111111'
			},
			{
				'id': 2,
				'name': 'Comp2',
				'label': 'Label222222',
				'expectedRetTime': 2.22222,
				'expectedWavelength': 2.2222,
				'description': 'Description of Comp22222'
			},
			{
				'id': 3,
				'name': 'Comp3',
				'label': 'Label3333',
				'expectedRetTime': 3.33333,
				'expectedWavelength': 3.3333,
				'description': 'Description of Comp3333'
			},
			{
				'id': 4,
				'name': 'Comp4',
				'label': 'Label4444',
				'expectedRetTime': 4.4444,
				'expectedWavelength': 4.44444,
				'description': 'Description of Comp4444'
			},
			{
				'id': 5,
				'name': 'Comp5',
				'label': 'Label5555',
				'expectedRetTime': 5.5555,
				'expectedWavelength': 5.55555,
				'description': 'Description of Comp5555'
			},
			{
				'id': 6,
				'name': 'Comp6',
				'label': 'Label6666',
				'expectedRetTime': 6.6666,
				'expectedWavelength': 6.6666,
				'description': 'Description of Comp6666'
			}
		]
	}
    
}