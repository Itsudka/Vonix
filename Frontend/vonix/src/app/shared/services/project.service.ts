import { Injectable } from '@angular/core';
import { supabase } from '../../core/supabase/supabase.client';

export interface Project {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category: string;
  material?: string;
  image_url: string;
  status?: string;
  is_featured: boolean;
  is_active: boolean;
  display_order: number;
  created_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  async getProjects(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    console.log('Proyectos desde Supabase:', data);
    console.log('Error proyectos:', error);

    if (error) {
      console.error('Error cargando proyectos:', error.message);
      return [];
    }

    return data ?? [];
  }

  async getFeaturedProjects(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('is_active', true)
      .eq('is_featured', true)
      .order('display_order', { ascending: true })
      .limit(6);

    console.log('Proyectos destacados desde Supabase:', data);
    console.log('Error proyectos destacados:', error);

    if (error) {
      console.error('Error cargando proyectos destacados:', error.message);
      return [];
    }

    return data ?? [];
  }
}
