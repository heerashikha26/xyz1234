import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

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
      firstName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      dateOfBirth: new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
      stuId: new FormControl(''),
      years : new FormControl('11')
    });
  }

  get formAltaControls(): any {
    return this.myForm['controls'];
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
