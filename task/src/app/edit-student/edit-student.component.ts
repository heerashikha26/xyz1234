import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit, OnChanges {

  @Input() recievedStudent: any;
  @Output() sendUpdatedStudentData: any = new EventEmitter();
  myForm!: FormGroup;
  image: any;

  constructor() { }
  ngOnChanges() {
    console.log(this.recievedStudent);
    this.myForm = new FormGroup({
      firstName: new FormControl(this.recievedStudent.firstName,[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl(this.recievedStudent.lastName,[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      dateOfBirth: new FormControl(this.recievedStudent.dateOfBirth,[Validators.required]),
      image: new FormControl(this.recievedStudent.image,[Validators.required]),
      stuId: new FormControl(this.recievedStudent.stuId),
      years: new FormControl('11')
    });
    this.image = this.myForm.value.image;
  }

  get formAltaControls(): any {
    return this.myForm['controls'];
 }

  localUrl!: any[];
  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        console.log('local path : ', this.localUrl);
        this.image = this.localUrl;
        let xyz = this.myForm.value;
        xyz.image = this.localUrl;
        this.myForm.setValue(xyz);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onUpdate() {
    console.log('this.myForm.value',this.myForm.value);
    this.sendUpdatedStudentData.emit(this.myForm.value);
  }

  onEdit() {
    console.log('form', this.myForm);
  }

  goBack() {
    location.reload();
  }

  ngOnInit(): void {
  }

}
