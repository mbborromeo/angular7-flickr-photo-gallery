import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent }      from './photos/photos.component';
//import { PhotoDetailComponent }  from './photo-detail/photo-detail.component';

const routes: Routes = [
  { path: 'photos', component: PhotosComponent },
  //{ path: 'detail/:id', component: PhotoDetailComponent },
  { path: '', redirectTo: '/photos', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
