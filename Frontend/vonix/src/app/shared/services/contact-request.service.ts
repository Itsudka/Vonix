import { Injectable } from '@angular/core';
import { supabase } from '../../core/supabase/supabase.client';

export interface ContactRequestPayload {
  full_name: string;
  email: string;
  phone: string;
  project_type: string;
  message: string;
  file_url?: string | null;
  file_name?: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ContactRequestService {
  async createContactRequest(payload: ContactRequestPayload): Promise<boolean> {
    console.log('Payload recibido en servicio:', payload);

    const { error } = await supabase
      .from('contact_requests')
      .insert(payload);

    console.log('Error insert contact_requests:', error);

    if (error) {
      console.error('Error guardando solicitud:', error.message);
      return false;
    }

    return true;
  }

  async uploadReferenceFile(file: File): Promise<string | null> {
    const safeFileName = file.name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9.\-_]/g, '');

    const filePath = `${Date.now()}-${safeFileName}`;

    const { error } = await supabase.storage
      .from('contact-files')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    console.log('Error upload contact file:', error);

    if (error) {
      console.error('Error subiendo archivo:', error.message);
      return null;
    }

    const { data } = supabase.storage
      .from('contact-files')
      .getPublicUrl(filePath);

    return data.publicUrl;
  }
}
