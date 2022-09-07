import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modules con las rutas hijas
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// Components
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// Routes
const routes: Routes = [
  /* 
    La ruta vacia es '/dashboard' por que queremos concatenar las rutas
        http://localhost:4200/dashboard/
        http://localhost:4200/dashboard/grafica1
        http://localhost:4200/dashboard/progress
  */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent },
];


@NgModule({
  declarations: [],
  imports: [
    // Importamos las rutas principales
    RouterModule.forRoot(routes),
    // Importamos el modulo con las rutas hijas de pages
    PagesRoutingModule,
    // Importamos el modulo con las rutas hijas de auth
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
