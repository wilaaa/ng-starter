import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JumbotonComponent } from './jumboton/jumboton.component';
import { FeatureComponent } from './feature/feature.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    JumbotonComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
