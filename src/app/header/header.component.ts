import { Component, ElementRef, QueryList, ViewChildren } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  emailId = "divyachavda30@gmail.com";
  isMobile = false;
  isMenuOpen = false;
  socialLinks = [
    {
      logo: "fa fa-linkedin",
      link: "https://www.linkedin.com/in/divya-chavda-2b1616120/",
      isSvg: false,
    },
    {
      logo: "social_x",
      link: "https://twitter.com/ms_sensational_",
      isSvg: true,
    },
    {
      logo: "fa fa-instagram",
      link: "https://www.instagram.com/ms_divyachavda/",
      isSvg: false,
    },
    {
      logo: "fa fa-github",
      link: "https://github.com/divya-chavda",
      isSvg: false,
    },
    {
      logo: "social_google",
      link: "mailto:divyachavda30@gmail.com",
      isSvg: true,
    },
  ];
  ngOnInit() {
    if (window.screen.availWidth < 690) {
      this.isMobile = true;
    }
  }
  onChangeMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  private nextTabID = "aboutSectionId";

  scrollToNextTab() {
    const ele = document["getElementById"](this.nextTabID);
    console.log(ele);
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  }
}
