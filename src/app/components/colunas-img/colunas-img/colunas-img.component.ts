import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-colunas-img',
  templateUrl: './colunas-img.component.html',
  styleUrls: ['./colunas-img.component.scss']
})
export class ColunasImgComponent implements OnInit {

  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  isVisible: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
        observer.disconnect();
      }
    });
    observer.observe(this.el.nativeElement);
  }

  convertToWebP(src: string): string {
    return src.replace(/\.(png|jpg|jpeg)/, '.webp');
  }
}
