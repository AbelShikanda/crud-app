import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../../services/students.service';
import { CommonModule } from '@angular/common';
import { SpinnersComponent } from '../partials/spinners/spinners.component';

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [FormsModule, CommonModule, SpinnersComponent],
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.scss',
  providers: [HttpClient],
})

export class StudentCreateComponent {

  name!: string
  course!: string
  email!: string
  phone!: string
  
  // name: string = '';
  // course: string = '';
  // email: string = '';
  // phone: string = '';

  isLoading: boolean = false;
  loadingTitle: string = 'laoding'
  errors: any = [];

  constructor(private studentService: StudentsService) {}
  saveStudent() {

    this.isLoading = true;
    this.loadingTitle = 'Saving Student';
    var inputData = {
      name: this.name,
      course: this.course,
      email: this.email,
      phone: this.phone
    }

    this.studentService.saveStudent(inputData).subscribe({
      next: (res: any) => {
      console.log(res, 'response')
      alert(res.message);
      this.name = '';
      this.course = '';
      this.email = '';
      this.phone = '';
      this.isLoading = false;
      },
      error: (err: any)=> {
        this.errors = err.error.errors;
        this.isLoading = false;
        console.log(err.error.errors, 'errors')
      }
    });
    
  }

}
