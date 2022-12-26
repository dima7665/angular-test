import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CapitalizeDirective } from './directives/capitalize.directive';
import { MultiplyPipe } from './pipes/multiply.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule,
        CapitalizeDirective,
        MultiplyPipe
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
