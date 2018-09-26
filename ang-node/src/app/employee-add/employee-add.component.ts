import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  @Input() employeeData = { id:'', name: '', department: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addEmployee() {
    this.rest.addEmployee(this.employeeData).subscribe((result) => {
      this.router.navigate(['/employees']);
    }, (err) => {
      console.log(err);
    });
  }

}