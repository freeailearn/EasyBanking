import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // Add other components here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // Define routes here
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
