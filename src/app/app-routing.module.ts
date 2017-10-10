import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RequiredValidator } from '@angular/forms';

const APP_ROUTES:Routes = [
    {path:'',component:HomeComponent},
    {path:'info',component:UserInfoComponent,children:[
        {
            path:':id',component:UserDetailsComponent
        }
    ]},
    {path:'details',component:UserDetailsComponent},
    {path:'**',redirectTo:''}
];

@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTES)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}