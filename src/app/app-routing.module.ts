import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfterLoginComponent } from './after-login/after-login.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProviderComponent } from './provider/provider.component';
import { RouterGuardService } from './service/router-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: '#', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'after-login/:id', component: AfterLoginComponent, canActivate:[RouterGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[RouterGuardService]},
  { path: 'provider', component: ProviderComponent, canActivate:[RouterGuardService]},
  { path: 'provider/:id', component: ProviderComponent, canActivate:[RouterGuardService]},

  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
