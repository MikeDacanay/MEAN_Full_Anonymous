import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service'

@Component({
	selector: 'app-notelist',
	templateUrl: './notelist.component.html',
	styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {


	notelist= [];

	ngOnInit() {
	}

	constructor(private _sharedService: SharedService) {
		this.getNotes();
		console.log(this.notelist);
	}

	getNotes(){
		this._sharedService.retrieveNotes((notes) => {
			this.notelist = notes;
		})
	}
}
