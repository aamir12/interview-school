
import {createFeature, createReducer, on} from '@ngrx/store'
import {SchoolStateInterface} from '../types/schoolState.interface'
import {schoolActions} from './actions'

const initialState: SchoolStateInterface = {
  isLoading: false,
  error: null,
  data: null,
  detail:null
}

const schoolFeature = createFeature({
  name: 'school',
  reducer: createReducer(
    initialState,
    on(schoolActions.getSchool, (state) => ({...state, isLoading: true})),
    on(schoolActions.getSchoolSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.schools,
    })),
    on(schoolActions.getSchoolFailure, (state) => ({...state, isLoading: false})),
    on(schoolActions.getSchoolDetailSuccess, (state,action) => ({...state, detail: action.school})),
  ),
})

export const {
  name: schoolFeatureKey,
  reducer: schoolReducer,
  selectIsLoading,
  selectError,
  selectData: selectSchoolData,
  selectDetail: selectSchoolDetail
} = schoolFeature
