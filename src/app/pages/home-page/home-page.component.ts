import { DataService } from 'src/app/utils/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Web3Service } from 'src/app/utils/web3.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [DataService, Web3Service]
})
export class HomePageComponent implements OnInit, OnDestroy {
  //heroes$: Observable<Hero[]>;
  start = 0;
  end = 2;
  finsied = false;
  data = [];
  articles = [
    'https://github.com/',
    'https://www.facebook.com/',
    'https://twitter.com/',
    'https://linkedin.com/',
    'https://google.com/',
    'https://medium.com/',
    'https://quora.com/'
  ];
  constructor(
    private dataService: DataService,
    private web3Service: Web3Service
  ) {}
  ngOnInit() {
    this.getUrl();
    let item = {
      title: 'Google',
      description: 'Search webpages, images, videos and more.',
      image: 'https://www.google.com/images/logo.png',
      url: 'https://www.google.com'
    };
    this.data.push(item);
    //window.addEventListener('scroll', this.scroll, true); //third parameter
    for (this.start; this.start <= this.end; this.start++) {
      // this.getData(this.articles[this.start])
      console.log(this.start, 'this.start');
    }
  }

  ngOnDestroy() {
    // window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    console.log('scrol');

    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
  };

  getData(url) {
    this.dataService.getDate(url).subscribe(_d => {
      console.log(_d, 'data');
      this.data.push(_d);
    });
  }
  getUrl() {
    try {
      this.web3Service.rumorEvent3().then(tx => {
        console.log(tx, 'transaction ');
        // this.getData(tx)
      });
    } catch (error) {
      console.log(error, 'error');
    }
  }
}
