import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { HiLevFuncComponent } from './hi-lev-func/hi-lev-func.component';
import { JsCreatorComponent } from './js-creator/js-creator.component';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [
  {
    path:'promises',
    component: PromisesComponent
  },
  {
    path:'callbacks',
    component: CallbacksComponent
  },
  {
    path:'hilevfunc',
    component: HiLevFuncComponent
  },
  {
    path:'jscreator',
    component: JsCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
