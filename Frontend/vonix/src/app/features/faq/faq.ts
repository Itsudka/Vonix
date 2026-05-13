import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqItem, FaqService } from '../../shared/services/faq.service';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  faqs = signal<FaqItem[]>([]);
  isLoading = signal(true);
  openIndex = 0;

  constructor(private faqService: FaqService) {
    this.loadFaqs();
  }

  async loadFaqs(): Promise<void> {
    this.isLoading.set(true);

    const faqs = await this.faqService.getFaqs();

    this.faqs.set(faqs);
    this.isLoading.set(false);
  }

  toggleFaq(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}
