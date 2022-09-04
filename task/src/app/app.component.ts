import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  visibleTotalList: boolean = true;
  footer : boolean = true;

  students: any[] = [
    {
      image: "https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?w=2000",
      name: "JOlivia",
      years: '14',
      stuId : 123
    },
    {
      image: "https://img.freepik.com/free-photo/teenager-student-girl-isolated-blue-background-posing-with-arms-hip-smiling_231208-14289.jpg?w=2000",
      name: "Charlotte",
      years: '11',
      stuId : 124
    },
    {
      image: "https://image.shutterstock.com/image-photo/young-curly-student-woman-wearing-260nw-1671266248.jpg",
      name: "Amelia",
      years: '14',
      stuId : 125
    },
    {
      image: "https://sombank.so/wp-content/uploads/2021/03/STUDENT-ACCOUNT-500x300.png",
      name: "John Wick",
      years:' 8',
      stuId : 126
    },
    {
      image: "https://i2.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1",
      name: "John Cena",
      years: '10',
      stuId : 127
    },
    {
      image: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2021/11/student_internship_programme/23802677-1-eng-GB/Student_Internship_Programme_article.jpg",
      name: "JIsabella",
      years: '1',
      stuId : 128
    }
  ];

  collectFromHeader(value: any) {
    console.log(value);
    this.visibleTotalList = false;
  }

  isFooterVisibleEvent(value :any){
    this.footer = value;
  }

  onDeleteStudent(stu :any){
    let filteredStudents=this.students.filter((e)=>stu.stuId !== e.stuId);
    console.log(filteredStudents);
    this.students = filteredStudents;
  }

  recivedNewStudent(value:any){
   let stuIds:any[] = [];
   this.students.forEach((ele)=>{
    stuIds.push(ele.stuId);
   });
   stuIds.sort().reverse()
   let obj = {
    image : value.image,
    name : value.firstName +' '+value.lastName,
    years : '10',
    stuId : stuIds.sort().reverse()[0]+1
   }
   this.students.push(obj);
   this.visibleTotalList = true;
  }
}
