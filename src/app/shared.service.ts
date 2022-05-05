import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
			'X-RapidAPI-Key': '7ff44f10famshffc93d31e9d4545p10b32fjsn4af97eda87f4'
    })
  };
  
  configUrl = 'https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD';

  getWheather(){
    
    return this.http.get(this.configUrl, this.httpOptions);
  }

  dpUrl = 'http://localhost:3000/products/';


  getProducts(){
    return this.http.get(this.dpUrl);
  }

  postProduct(addProduct:any){
    return this.http.post(this.dpUrl, addProduct);
  }

  deleteProduct(idProduct:any){
    return this.http.delete(this.dpUrl + idProduct)
  }

  editProduct(id:any){
    return this.http.get(this.dpUrl + id)
  }

  putProduct(id:any, data:any){
    return this.http.put(this.dpUrl + id, data)
  }
  

}
