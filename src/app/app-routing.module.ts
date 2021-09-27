import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PlaygroundComponent } from "./playground/playground.component";
import { AuthGuard } from './guards/auth.guard';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
// import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'playground', component: PlaygroundComponent, canActivate: [AngularFireAuthGuard] },
  // { path: '', redirectTo:'/home', pathMatch: 'full' },   //Handle 404 Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
