import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {
      image: 'https://img.tatacliq.com/images/i7/437Wx649H/MP000000010632162_437Wx649H_202109171906541.jpeg',
      title: 'Tata Phone',
      description: 'Smart phone',
    },
    {
      image: 'https://5.imimg.com/data5/HV/DY/FS/ANDROID-91469642/product-jpeg-500x500.jpeg',
      title: 'Vivo Phone',
      description: 'Vivo Phone',
    },
    {
      image: 'https://img.tatacliq.com/images/i7/437Wx649H/MP000000010632162_437Wx649H_202109171906541.jpeg',
      title: 'Apple Phone',
      description: 'Smartest phone',
    },
    {
      image: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones/new-phones/model-banner/p50-black.png',
      title: 'Huawei Phone',
      description: 'Huawei Phone',
    },
    {
      image: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606068354/Croma%20Assets/Communication/Mobiles/Images/9006246756382.png/mxw_640,f_auto',
      title: 'Croma Phone',
      description: 'Croma phone',
    },
    {
      image: 'https://m.media-amazon.com/images/I/41R9oD3K25L.jpg',
      title: 'One Plus Phone',
      description: 'Never settle',
    },
  ]
}


