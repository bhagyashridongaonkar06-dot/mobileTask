import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileCardComponent } from './component/mobile-card/mobile-card.component';
import { MobileDashboardComponent } from './component/mobile-dashboard/mobile-dashboard.component';
import { MaterialModule } from './module/module';

@NgModule({
  declarations: [
    AppComponent,
    MobileCardComponent,
    MobileDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
