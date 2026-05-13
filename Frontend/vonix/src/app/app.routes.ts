import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Services } from './features/services/services';
import { Projects } from './features/projects/projects';
import { Contacts } from './features/contacts/contacts';
import { Faq } from './features/faq/faq';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  { path: 'faq', component: Faq },
  { path: 'contact', component: Contacts },
  { path: '**', redirectTo: '' }


];
