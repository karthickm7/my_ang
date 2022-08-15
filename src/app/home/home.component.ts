import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDatas: any=[];
  currentUser: any;

  constructor() { }

  ngOnInit(): void {
    this.userDatas = localStorage.getItem('form-data');
    this.currentUser=JSON.parse(this.userDatas)
    console.log(typeof this.currentUser,"udatas")
  }
                                                                    
}
