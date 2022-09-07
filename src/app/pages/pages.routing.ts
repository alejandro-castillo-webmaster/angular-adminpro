import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';


// ARCHIVO DE RUTAS HIJAS DENTRO DE PAGES
/*
    Tal y como esta montada las rutas, estas saldran así
        http://localhost:4200/dashboard/
        http://localhost:4200/dashboard/grafica1
        http://localhost:4200/dashboard/progress
    El path es 'dashboard' para concatenar la URL como vemos arriba
*/
const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica1', component: Grafica1Component }
        ]
    },
];

@NgModule({
    imports: [
        // LE DECIMOS QUIE SON RUTAS HIJAS
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }
