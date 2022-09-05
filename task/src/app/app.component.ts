import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  visibleTotalList: boolean = true;
  footer: boolean = true;
  visibleeditList: boolean = false;
  selectedStudentForEdit: any = {};

  students: any[] = [
    {
      image: "https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?w=2000",
      years: '14',
      stuId: 123,
      firstName: 'JOlivia',
      lastName: '',
      dateOfBirth: '2022-09-07'
    },
    {
      image: "https://img.freepik.com/free-photo/teenager-student-girl-isolated-blue-background-posing-with-arms-hip-smiling_231208-14289.jpg?w=2000",
      years: '11',
      stuId: 124,
      firstName: 'Charlotte',
      lastName: '',
      dateOfBirth: '2022-09-07'
    },
    {
      image: "https://cdn.internationalstudent.com/images/international-student/asian-college-student-400x400.jpg",
      years: '14',
      stuId: 125,
      firstName: 'Amelia',
      lastName: '',
      dateOfBirth: '2022-09-07'
    },
    {
      image: "https://sombank.so/wp-content/uploads/2021/03/STUDENT-ACCOUNT-500x300.png",
      years: ' 8',
      stuId: 126,
      firstName: 'John',
      lastName: 'Wick',
      dateOfBirth: '2022-09-07'
    },
    {
      image: "https://i2.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1",
      years: '10',
      stuId: 127,
      firstName: 'John',
      lastName: 'Cena',
      dateOfBirth: '2022-09-07'
    },
    {
      image: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2021/11/student_internship_programme/23802677-1-eng-GB/Student_Internship_Programme_article.jpg",
      years: '1',
      stuId: 128,
      firstName: 'JIsabella',
      lastName: 'Cena',
      dateOfBirth: '2022-09-07'
    }
  ];

  collectFromHeader(value: any) {
    console.log(value);
    this.visibleTotalList = false;
  }

  isFooterVisibleEvent(value: any) {
    this.footer = value;
  }

  onDeleteStudent(stu: any) {
    let filteredStudents = this.students.filter((e) => stu.stuId !== e.stuId);
    console.log(filteredStudents);
    this.students = filteredStudents;
  }

  onEditStudent(stu: any) {
    this.visibleeditList = true;
    this.selectedStudentForEdit = stu;
  }

  onUpdateRecieved(value: any) {
    console.log('value', value);
    this.students.forEach((ele) => {
      if (value.stuId === ele.stuId) {
          ele.image = value.image,
          ele.firstName = value.firstName,
          ele.lastName = value.lastName,
          ele.years = value.years,
          ele.dateOfBirth = value.dateOfBirth,
          ele.stuId = value.stuId
      }
    });
    this.visibleTotalList = true;
    this.visibleeditList = false;

  }

  recivedNewStudent(value: any) {
    let stuIds: any[] = [];
    this.students.forEach((ele) => {
      stuIds.push(ele.stuId);
    });
    let obj = {
      image: value.image,
      firstName: value.firstName,
      lastName: value.lastName,
      years: value.years,
      dateOfBirth: value.dateOfBirth,
      stuId: stuIds.sort().reverse()[0] + 1
    }
    this.students.push(obj);
    this.visibleTotalList = true;
  }
}
