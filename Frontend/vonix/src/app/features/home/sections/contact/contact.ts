import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactRequestService } from '../../../../shared/services/contact-request.service';


interface ContactItem {
  icon: string;
  title: string;
  text: string;
  detail?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = new FormBuilder();

  selectedFileName = signal<string>('');
  isSubmitting = signal(false);

  projectTypes = [
    'Figura personalizada',
    'Prototipo',
    'Pieza funcional',
    'Diseño 3D',
    'Impresión desde archivo',
    'Otro',
  ];

  contactItems: ContactItem[] = [
    {
      icon: 'pi pi-whatsapp',
      title: 'WhatsApp',
      text: '+57 300 123 4567',
    },
    {
      icon: 'pi pi-envelope',
      title: 'Correo',
      text: 'hola@vonix3d.com',
    },
    {
      icon: 'pi pi-clock',
      title: 'Horario de atención',
      text: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
      detail: 'Sábados: 10:00 AM - 2:00 PM',
    },
  ];

  contactForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    projectType: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    file: [null as File | null],
  });

  constructor(private contactRequestService: ContactRequestService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    this.contactForm.patchValue({ file });
    this.selectedFileName.set(file.name);
  }

  async sendMessage(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const formValue = this.contactForm.value;
    const file = formValue.file;

    let fileUrl: string | null = null;

    if (file) {
      fileUrl = await this.contactRequestService.uploadReferenceFile(file);
    }

    const payload = {
      full_name: formValue.fullName ?? '',
      email: formValue.email ?? '',
      phone: formValue.phone ?? '',
      project_type: formValue.projectType ?? '',
      message: formValue.message ?? '',
      file_url: fileUrl,
      file_name: file?.name ?? null,
    };

    console.log('Payload enviado a Supabase:', payload);

    const success = await this.contactRequestService.createContactRequest(payload);

    this.isSubmitting.set(false);

    if (!success) {
      alert('No se pudo enviar la solicitud. Revisa la consola.');
      return;
    }

    alert('Tu solicitud fue enviada correctamente. Pronto nos pondremos en contacto.');

    this.contactForm.reset();
    this.selectedFileName.set('');
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);

    return !!control && control.invalid && (control.dirty || control.touched);
  }
}
