import {  School, SchoolDetail } from "./getSchoolResponse.interface"

export interface SchoolStateInterface {
  isLoading: boolean
  error: string | null
  data: School[] | null
  detail: SchoolDetail | null
}

