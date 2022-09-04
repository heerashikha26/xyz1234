import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-stuent.component.html',
  styleUrls: ['./add-stuent.component.css']
})
export class AddStuentComponent implements OnInit {
  Logo: any;

  constructor() { }

  myForm!: FormGroup;
  @Output() sendToApp = new EventEmitter();
  noImage : boolean = true;

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl('Bheem'),
      lastName: new FormControl('Nayak'),
      dateOfBirth: new FormControl('2022-09-02'),
      image: new FormControl('')
    });
  }
  goBack() {
    location.reload();
  }

  localUrl!: any[];
  showPreviewImage(event: any) {
    this.noImage = false;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        console.log('local path : ', this.localUrl);
        let xyz = this.myForm.value;
        xyz.image = this.localUrl;
        this.myForm.setValue(xyz);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
     
  }

  onAdd() {
    console.log(this.myForm);
    this.sendToApp.emit(this.myForm.value);
  }

}
