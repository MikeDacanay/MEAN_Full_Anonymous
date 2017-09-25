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
		this.getNotes();
	}

	constructor(private _sharedService: SharedService) {
	}

	getNotes(){
		this._sharedService.retrieveNotes((notes) => {
			this.notelist = notes;
			console.log(this.notelist);
		})
	}
}
