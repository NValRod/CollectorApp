import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/guards/auth.guard';


const routes: Routes = [
{ path:'',redirectTo:'/sign-in',pathMatch:'full'},
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
{ path: 'searcher',loadChildren: () => import('./pages/home/searcher/searcher.module').then(m => m.SearcherModule), canActivate: [AuthGuard]}, 
{ path: 'messages',loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule), canActivate: [AuthGuard]}, 
{ path: 'sign-up', loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule)}, 
{ path: 'sign-in', loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule)},
{ path: 'messager', loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule) },
{ path: '**', redirectTo:'/sign-in', pathMatch:'full'},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
