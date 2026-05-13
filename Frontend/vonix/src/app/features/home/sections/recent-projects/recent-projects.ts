import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Carousel } from '../../../../shared/ui/carousel/carousel';
import {
  Project,
  ProjectService,
} from '../../../../shared/services/project.service';

@Component({
  selector: 'app-recent-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, Carousel],
  templateUrl: './recent-projects.html',
  styleUrl: './recent-projects.css',
})
export class RecentProjects {
  featuredProjects = signal<Project[]>([]);
  isLoading = signal(true);

  constructor(private projectService: ProjectService) {
    this.loadFeaturedProjects();
  }

  async loadFeaturedProjects(): Promise<void> {
    this.isLoading.set(true);

    const projects = await this.projectService.getFeaturedProjects();

    console.log('Featured projects:', projects);

    this.featuredProjects.set(projects);
    this.isLoading.set(false);
  }
}
