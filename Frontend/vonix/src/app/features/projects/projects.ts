import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { videoProjects } from '../interfaces/interface.projects';
import {
  Project,
  ProjectService,
} from '../../shared/services/project.service';

type ProjectCategory =
  | 'Todos'
  | 'Figura'
  | 'Prototipo'
  | 'Pieza Funcional'
  | 'Diseño 3D';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  selectedCategory = signal<ProjectCategory>('Todos');
  projects = signal<Project[]>([]);
  isLoading = signal(true);

  categories: ProjectCategory[] = [
    'Todos',
    'Figura',
    'Prototipo',
    'Pieza Funcional',
    'Diseño 3D',
  ];

  filteredProjects = computed(() => {
    const category = this.selectedCategory();

    if (category === 'Todos') {
      return this.projects();
    }

    return this.projects().filter((project) => project.category === category);
  });

  video: videoProjects[] = [
    {
      video: '/videos/video_1.mp4',
      className: 'video-project',
      alt: 'Proyecto-1',
    },
  ];

  constructor(private projectService: ProjectService) {
    this.loadProjects();
  }

  async loadProjects(): Promise<void> {
    this.isLoading.set(true);

    const projects = await this.projectService.getProjects();

    this.projects.set(projects);
    this.isLoading.set(false);
  }

  selectCategory(category: ProjectCategory): void {
    this.selectedCategory.set(category);
  }

  getstatusIcon(status?: string): string {
    switch (status) {
      case 'Nuevo':
        return 'pi pi-check-circle';

      case 'Popular':
        return 'pi pi-thumbs-up';

      case 'Destacado':
        return 'pi pi-star-fill';

      default:
        return 'pi pi-sparkles';
    }
  }

  getStatusClass(status?: string): string {
    switch (status) {
      case 'Nuevo':
        return 'status-new';

      case 'Popular':
        return 'status-popular';

      case 'Destacado':
        return 'status-featured';

      default:
        return 'status-default';
    }
  }
}
