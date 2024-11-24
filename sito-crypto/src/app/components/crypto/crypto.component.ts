import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  cryptoData: any;
  cryptoName: string = '';
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cryptoName = params['name'];  // Prendi il nome della criptovaluta dalla rotta
      this.fetchCryptoData();  // Recupera i dati della criptovaluta
    });
  }

  fetchCryptoData(): void {
    this.loading = true;
    this.http.get(`https://api.coincap.io/v2/assets/${this.cryptoName}`)
      .subscribe(
        (data: any) => {
          this.cryptoData = data.data;  // Salva i dati nella variabile cryptoData
          this.loading = false;
        },
        error => {
          console.error('Errore nel recupero dei dati', error);
          this.loading = false;
        }
      );
  }
}
