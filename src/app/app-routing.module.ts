import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleChildComponent } from './article/article-child/article-child.component';
import { ArticleComponent } from './article/article.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { CrudComponent } from './crud/crud.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { InfoEmployeeComponent } from './info-employee/info-employee.component';
import { JsonAddComponent } from './json-add/json-add.component';
import { JsonEditComponent } from './json-edit/json-edit.component';
import { JsonServerComponent } from './json-server/json-server.component';
import { LoginComponent } from './login/login.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'details/:eid', component:InfoEmployeeComponent},
  {path:'crud', component:CrudComponent},
  {path:'http-service', component:HttpComponent},
  {path:'json-service', component:JsonServerComponent},
  {path:'json-add', component:JsonAddComponent},
  {path:'json-edit/:id', component:JsonEditComponent},
  {path:'article', component:ArticleComponent},
  {path:'atribute-binding', component:AttributeBindingComponent},
  {path:'ngfor', component:NgforComponent},
  {path:'ngswitch', component:NgswitchComponent},
  {path:'pipe', component:PipeComponent},
  {path:'forms', component:FormsComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
