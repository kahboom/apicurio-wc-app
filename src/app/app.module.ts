import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ApicurioModule } from './apicurio-editor/apicurio-editor.module';
import { ApicurioEditorComponent } from './apicurio-editor/apicurio-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ApicurioEditorComponent
  ],
  imports: [
    BrowserModule,
    ApicurioModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents: [
    ApicurioEditorComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(ApicurioEditorComponent, {injector: this.injector});

    customElements.define('apicurio-wc-app', el);
  }
}
