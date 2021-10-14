import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate:[AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signin',
    
    loadChildren: () => import('./singin/singin.module').then( m => m.SinginPageModule) 
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'message/:id',
    canActivate:[AuthGuard],
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'form-biblio',
    canActivate:[AuthGuard],
    loadChildren: () => import('./form-biblio/form-biblio.module').then( m => m.FormBiblioPageModule)
  },
  {
    path: 'form-update/:id',
    canActivate:[AuthGuard],
    loadChildren: () => import('./form-update/form-update.module').then( m => m.FormUpdatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
