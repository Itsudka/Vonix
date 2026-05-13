import { Injectable } from '@angular/core';
import { supabase } from '../../core/supabase/supabase.client';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  async getFaqs(): Promise<FaqItem[]> {
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });


    console.log('FAQs desde Supabase:', data);
    console.log('Error Supabase:', error);

    if (error) {
      console.error('Error cargando FAQs:', error.message);
      return [];
    }

    return data ?? [];
  }
}
