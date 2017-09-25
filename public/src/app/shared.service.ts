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
		this._http.post('/note', note)
		.subscribe();

	}

	retrieveNotes(callback){
		this._http.get('/notes')
		.subscribe(data =>{
			console.log(data.json());
			this.noteList = data.json();
			callback(this.noteList);
		});
	}
}
