import { Injectable } from '@angular/core';
import { supabase } from '../../core/supabase/supabase.client';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  image_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  async getServices(): Promise<ServiceItem[]> {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    console.log('Servicios desde Supabase:', data);
    console.log('Error servicios:', error);

    if (error) {
      console.error('Error cargando servicios:', error.message);
      return [];
    }

    return data ?? [];
  }
}
