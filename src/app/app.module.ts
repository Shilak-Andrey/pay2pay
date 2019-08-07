import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule}  from  '@angular/common';
//Components
import { AppComponent } from './app.component';
import { TransitsComponent } from './transits/transits.component';
import { HistoryComponent } from './history/history.component';

// Service
import { TransitsService } from './transits.service';

@NgModule({
  declarations: [
    AppComponent,
    TransitsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [TransitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
