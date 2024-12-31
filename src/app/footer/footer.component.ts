import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
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
}
