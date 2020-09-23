import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProviderComponent } from './provider/provider.component';
import { DataService } from './service/data.service';
import { AuthenticationService } from './service/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    FooterComponent,
    AfterLoginComponent,
    ErrorComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
