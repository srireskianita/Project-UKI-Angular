import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee:any;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.rest.getEmployee(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.employee = data;
    });
  }

  getEmployees() {
    this.employee = [];
    this.rest.getEmployees().subscribe((data: {}) => {
      this.employee = data;
    });
  }

  updateEmployee() {
    this.rest.updateEmployee([this.employee._id], this.employee).subscribe((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  delete(id) {
    this.rest.deleteEmployee(id)
      .subscribe(res => {
          this.getEmployees();
          this.router.navigate(['/employees']);
        }, (err) => {
          console.log(err);
        }
      );
  } 
}