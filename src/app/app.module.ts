import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightUpComponent } from './RightUp/RightUp.component';
import { RightDownComponent } from './RightDown/RightDown.component';
import { VerificationComponent } from './Verification/Verification.component';
import { CenterComponent } from './Center/Center.component';
import { CaroselComponent } from './Carosel/Carosel.component';
import { TrialComponent } from './Trial/Trial.component';
import { PostionhelpComponent } from './Postionhelp/Postionhelp.component';

@NgModule({
  declarations: [
    AppComponent,
    RightUpComponent,
    RightDownComponent,
    VerificationComponent,
    CenterComponent,
    CaroselComponent,
    TrialComponent,
    PostionhelpComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
