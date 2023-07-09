import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { StudentService } from './services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns:string[] = ['id','firstname','lastname','email','dob','gender','education','year','action'];
   dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort)sort!: MatSort;

  constructor(private _dialog: MatDialog , private _studServices:StudentService, ){}

    ngOnInit(): void {
        this.getStudList();
    }


  openAddStudEditForm(){  
    this._dialog.open(EditComponent);
  }


  getStudList(){
    this._studServices.getStudList().subscribe({
      next: (res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
      
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    deleteStuddata(id: number) {
      this._studServices.deleteStuddata(id).subscribe({
        next: (res) => {
          alert('Student Data Deleted?!');
          this.getStudList()
        },
        error: console.log,
      })
    }

   

}
