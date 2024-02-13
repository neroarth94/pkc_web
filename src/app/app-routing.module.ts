import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WipComponent } from './wip/wip.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: '', component: ContentComponent, pathMatch: 'full' },
  { path: 'lol', component: ContentComponent, pathMatch: 'full', },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
