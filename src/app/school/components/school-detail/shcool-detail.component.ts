import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import { Store } from "@ngrx/store";
import { selectSchoolDetail } from "../../store/reducers";

@Component({
  standalone:true,
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  imports: [
    MatDialogModule,
    CommonModule,
    MatButtonModule
  ],
})
export class SchoolDetailComponent {
  readonly dialogRef = inject(MatDialogRef<SchoolDetailComponent>);
  store = inject(Store);
  data$ = this.store.select(selectSchoolDetail);
  onNoClick(): void {
    this.dialogRef.close();
  }
}