import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { language } from '../../../assets/language/language';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {
  public pageConfig: any;
  public pageLanguage: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.pageLanguage = language;
    this.http.get('assets/config/config.json')
      .subscribe(
        res => {
          this.pageConfig = res;
        }
      );
  }
}
