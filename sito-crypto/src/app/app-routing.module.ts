import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoComponent } from './components/crypto/crypto.component';

const routes: Routes = [
  { path: 'crypto/:name', component: CryptoComponent },  // rotta dinamica per criptovalute
  { path: '', redirectTo: '/crypto/bitcoin', pathMatch: 'full' },  // reindirizza a Bitcoin per default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
