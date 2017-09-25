import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { NotelistComponent } from './notelist/notelist.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    NotelistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
