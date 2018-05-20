import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './pages/home/home.component';
import { ProfileComponent} from './pages/profile/profile.component';
import { RegisterComponent} from './pages/register/register.component';
import { LoginComponent} from './pages/login/login.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { AuthGuardService } from "./auth-guard.service";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
