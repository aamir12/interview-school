
export interface School {
  dbn: string
  school_name: string
  boro: string
  overview_paragraph: string
  school_10th_seats: string
  academicopportunities1: string
  academicopportunities2: string
  ell_programs: string
  neighborhood: string
  building_code: string
  location: string
  phone_number: string
  fax_number: string
  school_email: string
  website: string
  subway: string
  bus: string
  grades2018: string
  finalgrades: string
  total_students: string
  extracurricular_activities: string
  school_sports: string
  attendance_rate: string
  pct_stu_enough_variety: string
  pct_stu_safe: string
  school_accessibility_description: string
  directions1: string
  requirement1_1: string
  requirement2_1: string
  requirement3_1: string
  requirement4_1: string
  requirement5_1: string
  offer_rate1: string
  program1: string
  code1: string
  interest1: string
  method1: string
  seats9ge1: string
  grade9gefilledflag1: string
  grade9geapplicants1: string
  seats9swd1: string
  grade9swdfilledflag1: string
  grade9swdapplicants1: string
  seats101: string
  admissionspriority11: string
  admissionspriority21: string
  admissionspriority31: string
  grade9geapplicantsperseat1: string
  grade9swdapplicantsperseat1: string
  primary_address_line_1: string
  city: string
  zip: string
  state_code: string
  latitude: string
  longitude: string
  community_board: string
  council_district: string
  census_tract: string
  bin: string
  bbl: string
  nta: string
  borough: string
}

export interface GetSchoolResponseInterface {
  schools: School[]
}


export type SchoolDetails = SchoolDetail[];

export interface SchoolDetail {
  dbn: string
  school_name: string
  num_of_sat_test_takers: string
  sat_critical_reading_avg_score: string
  sat_math_avg_score: string
  sat_writing_avg_score: string
}
