import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CapitalizeDirective } from './directives/capitalize.directive';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { ElementRefTestComponent } from './components/element-ref-test/element-ref-test.component';
import {FormsModule} from "@angular/forms";
import { MainComponentComponent } from './components/hooks/main-component/main-component.component';
import { ChildComponentComponent } from './components/hooks/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ElementRefTestComponent,
    MainComponentComponent,
    ChildComponentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule,
        CapitalizeDirective,
        MultiplyPipe,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
