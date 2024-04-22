import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => 
            import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'settings',
        loadComponent: () => 
            import('./settings/settings.component').then(m => SettingsComponent),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
