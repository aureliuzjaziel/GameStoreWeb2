import { Routes } from '@angular/router';
import { Carrito } from './pages/carrito/carrito';
import { JuegosLista } from './pages/juegos-lista/juegos-lista';
import { Registro } from './pages/registro/registro';
import { NavBar } from './components/nav-bar/nav-bar';

export const routes: Routes = [
    { path: "juegos-lista", component: JuegosLista },
    { path: "carrito", component: Carrito },
    { path: "registro", component: Registro },
    { path: "", redirectTo: "juegos-lista", pathMatch: "full" }
];
