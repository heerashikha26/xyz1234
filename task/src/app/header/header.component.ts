import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() isVisibleFull: any = new EventEmitter();
  isVisible: boolean = true;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  onAdding() {
    this.isVisible = false;
    this.isVisibleFull.emit(this.isVisible);
  }

}
