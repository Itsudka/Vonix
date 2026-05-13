import { Component } from '@angular/core';
import { Intro } from './sections/intro/intro';
import { RecentProjects } from './sections/recent-projects/recent-projects';
import { Services } from './sections/services/services';
import { HowItWorks } from './sections/how-it-works/how-it-works';
import { Faq } from './sections/faq/faq';
import { Contact } from './sections/contact/contact';



@Component({
  selector: 'app-home',
  imports: [
    Intro,
    Services,
    RecentProjects,
    HowItWorks,
    Faq,
    Contact
],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
