import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  dashboardForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dashboardForm = this.fb.group({
      users: ['', [Validators.required, Validators.minLength(6)]],
      areas: ['', [Validators.required, Validators.minLength(6)]],
      usersPerArea: ['', [Validators.required, Validators.minLength(6)]],
      listAreaLeaders: ['', [Validators.required, Validators.minLength(6)]]
    })
  }


}
