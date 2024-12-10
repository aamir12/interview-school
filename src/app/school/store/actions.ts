import {createActionGroup, emptyProps, props} from '@ngrx/store'
import { GetSchoolResponseInterface, School, SchoolDetail } from '../types/getSchoolResponse.interface'

export const schoolActions = createActionGroup({
  source: 'school',
  events: {
    'Get school': emptyProps(),
    'Get school success': props<{schools: School[]}>(),
    'Get school failure': emptyProps(),
    'Get school detail': props<{schoolId: string}>(),
    'Get school detail success': props<{school: SchoolDetail}>(),
  },
})
