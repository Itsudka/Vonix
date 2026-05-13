import { Injectable } from '@angular/core';
import { supabase } from '../../core/supabase/supabase.client';

export interface IntroModel {
  id: string;
  image_url: string;
  alt: string;
  class_name: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class IntroService {
  async getIntroModels(): Promise<IntroModel[]> {
    const { data, error } = await supabase
      .from('intro_models')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    console.log('Modelos intro desde Supabase:', data);
    console.log('Error modelos intro:', error);

    if (error) {
      console.error('Error cargando modelos del intro:', error.message);
      return [];
    }

    return data ?? [];
  }
}
