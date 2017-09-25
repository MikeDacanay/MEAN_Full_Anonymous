import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service'

@Component({
	selector: 'app-notelist',
	templateUrl: './notelist.component.html',
	styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {

	notelist= [];

	constructor(private _sharedService: SharedService) {
		this.notelist=this._sharedService.noteList
	}

	ngOnInit() {
	}

}
