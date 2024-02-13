import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor() { }
  ngOnInit(): void { }
   
  imgCollection: Array<object> = [
      {
        image: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0172.JPG',
        thumbImage: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0172.JPG',
        alt: '',
        title: ''
      },
      {
        image: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0173.JPG',
        thumbImage: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0173.JPG',
        alt: '',
        title: ''
      },
      {
        image: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0174.JPG',
        thumbImage: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0174.JPG',
        alt: '',
        title: ''
      },
      {
        image: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0175.JPG',
        thumbImage: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0175.JPG',
        alt: '',
        title: ''
      },
      {
        image: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0176.JPG',
        thumbImage: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0176.JPG',
        alt: '',
        title: ''
      },
      {
        image: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0177.JPG',
        thumbImage: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0177.JPG',
        alt: '',
        title: ''
      },
      {
        image: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0178.JPG',
        thumbImage: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0178.JPG',
        alt: '',
        title: ''
      },
      {
        image: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0179.JPG',
        thumbImage: 'assets/img/kendo/2018_Ambassador_Cup/DSC_0179.JPG',
        alt: '',
        title: ''
      }
  ];
}
