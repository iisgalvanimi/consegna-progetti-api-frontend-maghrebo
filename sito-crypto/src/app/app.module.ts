import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { CryptoComponent } from './components/crypto/crypto.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   // Aggiungi HttpClientModule
    AppRoutingModule    // Aggiungi il modulo delle rotte
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
