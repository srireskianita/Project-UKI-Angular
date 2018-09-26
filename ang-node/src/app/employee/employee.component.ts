import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  @Input() employeeData:any = { id: '', name: '', department: '' };
  employees:any = [];
  

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employees = [];
    this.rest.getEmployees().subscribe((data: {}) => {
      console.log(data);
      this.employees = data;
    });
  }

  add() {
    this.router.navigate(['/employee-add']);
  }

  // delete(id) {
  //   console.log('delete')
  //   this.rest.deleteEmployee(id)
  //     .subscribe(res => {
  //         this.getEmployees();
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // } 

  updateEmployee(id) {
    console.log(id);
    this.router.navigate(['/employees/'+id]);
  }

}
