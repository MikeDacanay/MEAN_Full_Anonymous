import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class SharedService {

	noteList=[];

	constructor(private _http: Http) { 
	}	

	create(note){
		this._http.post('/notes', note)
		.subscribe()
	}

	retrieveNotes(callback){
		this._http.get('/notes')
		.subscribe(data =>{
			this.noteList = data.json();
			callback(this.noteList);
		});
	}
}
