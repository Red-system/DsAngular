import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routingComponents } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { ListUpdateService } from './list-update.service';
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    InputComponent,
    ListComponent,

  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule

  ],
  providers: [ListUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
