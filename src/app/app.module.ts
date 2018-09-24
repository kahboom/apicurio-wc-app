import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApicurioEditorComponent } from './apicurio-editor/apicurio-editor.component';

@NgModule({
  declarations: [
    AppComponent//,
    //ApicurioEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents: [
    ApicurioEditorComponent
  ]
})
export class AppModule { }
