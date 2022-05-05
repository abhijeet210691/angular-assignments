import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InfoEmployeeComponent } from './info-employee/info-employee.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpComponent } from './http/http.component';
import { JsonServerComponent } from './json-server/json-server.component';
import { JsonAddComponent } from './json-add/json-add.component';
import { JsonEditComponent } from './json-edit/json-edit.component';
import { ArticleComponent } from './article/article.component';
import { ArticleChildComponent } from './article/article-child/article-child.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    InfoEmployeeComponent,
    CrudComponent,
    HttpComponent,
    JsonServerComponent,
    JsonAddComponent,
    JsonEditComponent,
    ArticleComponent,
    ArticleChildComponent,
    AttributeBindingComponent,
    NgforComponent,
    NgswitchComponent,
    PipeComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
