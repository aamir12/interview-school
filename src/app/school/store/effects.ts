import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import { SchoolService } from '../services/school.service'
import { schoolActions } from './actions'
import {  School, SchoolDetail } from '../types/getSchoolResponse.interface'
import { MatDialog } from '@angular/material/dialog'
import { SchoolDetailComponent } from '../components/school-detail/shcool-detail.component'


export const getSchoolEffect = createEffect(
  (actions$ = inject(Actions), schoolService = inject(SchoolService)) => {
    return actions$.pipe(
      ofType(schoolActions.getSchool),
      switchMap(() => {
        return schoolService.getSchools().pipe(
          map((schools: School[]) => {
            return schoolActions.getSchoolSuccess({schools})
          }),
          catchError(() => {
            return of(schoolActions.getSchoolFailure())
          })
        )
      })
    )
  },
  {functional: true}
)



export const getSchoolDetailEffect = createEffect(
  (actions$ = inject(Actions), schoolService = inject(SchoolService)) => {
    return actions$.pipe(
      ofType(schoolActions.getSchoolDetail),
      switchMap(({schoolId}) => {
        return schoolService.getSchoolDetail(schoolId).pipe(
          map((school:SchoolDetail) => {
            return schoolActions.getSchoolDetailSuccess({school})
          }),
          catchError(() => {
            return of(schoolActions.getSchoolFailure())
          })
        )
      })
    )
  },
  {functional: true}
)


// export const openSchoolDetailEffect = createEffect(
//   (actions$ = inject(Actions), dialog = inject(MatDialog)) => {
//     return actions$.pipe(
//       ofType(schoolActions.getSchoolDetailSuccess),
//       tap(({school}) => {
//         if(school) {
//           const dialogRef = dialog.open(SchoolDetailComponent, {
//           });
//         }
//       })
//     )
//   },
//   {functional: true, dispatch: false}
// )