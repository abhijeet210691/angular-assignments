import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  book=[
    new BooksArray(1, 'Java', 678),
    new BooksArray(2, 'css', 3457)
  ]

  // assignment 3

  salaries=[2000, 21000, 30000, 4000, 50000, 33333, 444444];
}

class  BooksArray {
  id:number;
  bookName:string;
  price:number;
  constructor(bookId:number, bName:string, bookPrice:number) {
    this.id = bookId,
    this.bookName = bName,
    this.price = bookPrice
  }
}
