import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent  {
  studForm: FormGroup;
  education:string[]  = [
    'COMPUTER SCIENCE AND ENGINEERING',
    'INFORMATION TECHNOLOGY',
    'AUTOMOBILE ENGINEERING',
    'AERONATICAL ENGINEERING'
  ];
  
  constructor( private _fb:FormBuilder , private _studService: StudentService, private _dialogRef: DialogRef){
    this.studForm = this._fb.group({
      firstname: '',
      lastname: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      year: ''
    })
  
}
  onsubmit(){
    if (this.studForm.valid){
      // console.log(this.studForm.value)
      this._studService.addStud(this.studForm.value).subscribe({
        next: (val: any)=>{
          alert('Student added Successfully');
          this._dialogRef.close();
        },
        error:(err: any)=>{
          console.error(err);
        },
      })
    }
  }

}