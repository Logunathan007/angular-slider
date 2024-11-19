import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedIndex: number = 0;
  imageLoaded = true;
  slides = [
    {
      contentHead: "Find a Verified Pro",
      contentSub: "Connect with experienced and certified professionals in your industry for reliable and efficient services.",
      contentOption: "Search",
      color: false,
      content: {
        image: "../assets/images/Producers.png",
        contentTitle: "Find producers your way",
        contentSub: "Work with the largest network of independent professionals from quick turnarounds to big transformations.",
      },
    }, {
      contentHead: "Request Proposals",
      contentSub: "Solicit detailed project proposals from qualified service providers based on your specific requirements.",
      contentOption: "Request",
      color: true,
      content: {
        image: "../assets/images/Proposals.png",
        contentTitle: "Submit your proposals",
        contentSub: "To find the right service provider for your project, request detailed project proposals from qualified candidates who meet your specific requirements.",
      },
    }, {
      contentHead: "Services",
      contentSub: "Find detailed information on inspection services provided by our inspectors' network.",
      contentOption: "Browse more services",
      color: false,
      content: {
        image: "../assets/images/Services.png",
        contentTitle: "Request Information for Services",
        contentSub: "Our inspector network offers comprehensive information on the inspection services they provide. You can easily find detailed information about their services on our website.",
      },
    }, {
      contentHead: "Self Assessment",
      contentSub: "Use our self-assessment tool to enhance your qualifications and meet industry standards.",
      contentOption: "Assessment",
      color: false,
      content: {
        image: "../assets/images/Assessment.png",
        contentTitle: "Self-Assessment",
        contentSub: "Enhance your qualifications and meet industry standards with our self-assessment tool. Use it now to take your skills to the next level.",
      },
    },
  ]

  setImageLoaded(): void {
    setTimeout(() => {
      this.imageLoaded = true;
    }, 50)
  }
  navigateNext(): void {
    this.imageLoaded = false;
    this.selectedIndex = (this.selectedIndex + 1) % this.slides.length;
    this.setImageLoaded();
  }
  selectSlide(i: number): void {
    this.imageLoaded = false;
    this.selectedIndex = i;
    this.setImageLoaded();
  }
  navigateBack(): void {
    this.imageLoaded = false;
    this.selectedIndex = (this.selectedIndex - 1 + this.slides.length) % this.slides.length;
    this.setImageLoaded();
  }
}
