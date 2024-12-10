import { CommonModule } from '@angular/common';
import {Component, inject, OnInit} from '@angular/core'
import { Store } from '@ngrx/store';
import { schoolActions } from 'src/app/school/store/actions';
import { selectSchoolData, selectSchoolDetail } from 'src/app/school/store/reducers';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { SchoolDetailComponent } from '../school-detail/shcool-detail.component';
import { School } from '../../types/getSchoolResponse.interface';
import { skip, tap } from 'rxjs';

@Component({
  selector: 'app-school-feed',
  templateUrl: './school.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    SchoolDetailComponent
  ],
})
export class SchoolComponent implements OnInit {
  store = inject(Store);
  dialog = inject(MatDialog);
  data$ = this.store.select(selectSchoolData);
  ngOnInit(): void {
    this.store.dispatch(schoolActions.getSchool());
    // open modal
    this.store.select(selectSchoolDetail).pipe(
      skip(1),
      tap((schoolDetail) => {
      if(schoolDetail) {
        const dialogRef = this.dialog.open(SchoolDetailComponent, {
        });
      }else {
        alert('Detail not found')
      }
    })).subscribe();
  }

  schoolDetail(school:School) {
    this.store.dispatch(schoolActions.getSchoolDetail({schoolId: school.dbn}));
  }
}
