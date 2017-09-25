import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
import 'rxjs';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	note = {
		memo:"",
	}

	constructor(private _sharedService: SharedService) { }

	ngOnInit() {
	}

	onSubmit(){
		if(this.note.memo.length > 0){
			this._sharedService.create(this.note);
			this.note = {
				memo:"",
			}
		}
	}
}
