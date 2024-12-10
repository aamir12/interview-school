import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/school/school.routes').then((m) => m.routes),
  },
]
