import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// ARCHIVO DE RUTAS HIJAS DENTRO DE AUTH
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
    imports: [
        // LE DECIMOS QUIE SON RUTAS HIJAS
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}
