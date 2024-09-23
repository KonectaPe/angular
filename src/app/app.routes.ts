import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GraduateComponent } from './pages/graduate/graduate.component';
import { ClassroomComponent } from './pages/classroom/classroom.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CertificateComponent } from './pages/certificate/certificate.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diplomados', component: GraduateComponent },
  { path: 'aula-virtual', component: ClassroomComponent },
  { path: 'certificados', component: CertificateComponent },
  { path: '**', component: NotfoundComponent },
];
