import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponentComponent} from "./components/hooks/main-component/main-component.component";
import {ElementRefTestComponent} from "./components/element-ref-test/element-ref-test.component";
import {MenuComponent} from "./components/menu/menu.component";

const routes: Routes = [
    { component: MainComponentComponent, path: 'hooks', title: 'hooks test' },
    { component: MenuComponent, path: 'menu', title: 'menu test' },
    { component: ElementRefTestComponent, path: 'element-ref', title: 'elementRef test' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
