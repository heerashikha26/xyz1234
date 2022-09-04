import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-stuent.component.html',
  styleUrls: ['./add-stuent.component.css']
})
export class AddStuentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goBack(){
    location.reload();
  }

}
