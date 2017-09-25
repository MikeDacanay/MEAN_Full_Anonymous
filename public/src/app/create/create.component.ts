import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service'
@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	note = {
		xxx:"",
	}

	constructor(private _sharedService: SharedService) { }

	ngOnInit() {
	}

	onSubmit(){
		if(this.note.xxx.length>0){
			this._sharedService.noteList.splice(0,0,this.note.xxx);
			this.note.xxx = '';
		}
	}
}
