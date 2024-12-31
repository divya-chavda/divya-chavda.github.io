import { Component } from "@angular/core";

@Component({
  selector: "app-journey",
  templateUrl: "./journey.component.html",
  styleUrls: ["./journey.component.scss"],
})
export class JourneyComponent {
  journeys = [
    {
      id: "first",
      companyName: "Citi Corp.",
      role: "Apps Dev Intermed Prgmr Anlyst (SDE-2)",
      logo: "citi_logo.jpeg",
      startDate: "Aug 2023",
      endDate: "Present",
      active: false,
      jobResp: `
        As a Senior Software Developer at Citi Bank's research team with 6.5+ years of expertise, I contribute to a critical email service application. Proficient in Java, Spring Boot, Microservices, OpenShift, Docker, and Kubernetes, I enhanced communication and delivery by integrating Kafka and upgrading Java and Spring Boot.
        <br/> <br/>My focus on comprehensive unit test cases ensures application reliability. Active participation in Agile practices fosters collaboration, streamlining processes for the timely delivery of secure, feature-rich projects.
      `,
      location: "Pune, Maharashtra, India",
    },
    {
      id: "second",
      companyName: "Infosys",
      role: "Senior System Engineer → Technology Analyst",
      logo: "infosys_logo.jpeg",
      startDate: "Mar 2021",
      endDate: "Aug 2023",
      active: false,
      jobResp: `
        I began my journey at Infosys as a Senior System Engineer and was later promoted to Technology Analyst, reflecting my dedication and contributions. I actively analyzed, designed, and enhanced applications, collaborating with clients and teams to deliver high-quality solutions on time.
        <br/><br/>
Leveraging expertise in Java, Angular, JavaScript, and HTML, I developed robust applications aligning with client needs and goals. My promotion highlighted my ability to manage complex projects, meet tight deadlines, and achieve impactful results, strengthening my skills for future initiatives.
      `,
      location: "Pune, Maharashtra, India",
    },
    {
      id: "third",
      companyName: "Adrixus Tech Studio",
      role: "Full Stack Developer",
      logo: "weareadrixus_logo.jpeg",
      startDate: "Jul 2020",
      endDate: "Jul 2021",
      active: false,
      jobResp: `
          As a Full Stack Developer at Adrixus Tech Studio, I specialized in web applications and blockchain technology using JavaScript, TypeScript, HTML, CSS, Angular 10, and NodeJS. I integrated real-time chat with Socket.io, enhanced a dating app with robust unit tests, and led technology upgrades for cutting-edge features and security.
<br/> <br/>
I also developed a responsive frontend for a crowdfunding platform using Angular 10 and built a NodeJS backend integrating Web3 and smart contracts for secure crypto transactions. Active in Agile practices, I streamlined processes, ensuring reliable and innovative project delivery.
        `,
      location: "Vadodara, Gujarat, India",
    },
    {
      id: "four",
      companyName: "M2 Web Solutions",
      role: "Ionic and Angular Developer",
      logo: "m2_web_soltuions_logo.jpeg",
      startDate: "Apr 2019",
      endDate: "Jul 2020",
      active: false,
      jobResp: `As an Ionic and Angular Developer at M2 Web Solutions, I built cross-platform mobile and web applications using Ionic 4, Angular 8, and TypeScript. Key achievements include integrating Apple Pay and PayPal for secure transactions, developing a vehicle trading app with features like vehicle details and watchlist management, and delivering a seamless user experience across devices.
<br/> <br/>
I also designed a review management system with Angular 8, incorporating social sharing, widget integration, and white labeling for customized branding. These contributions ensured high-performance applications that met user needs and business goals.`,
      location: "Vadodara, Gujarat, India",
    },
    {
      id: "five",
      companyName: "Colorengine",
      role: "Ionic and Angular Developer",
      logo: "colorengine_logo.jpeg",
      startDate: "Aug 2018",
      endDate: "Apr 2019",
      active: false,
      jobResp: `As an entry-level Full Stack Developer at Colorengine, I worked on designing and maintaining mobile applications using Android SDK and NodeJS, focusing on enhancing user experience and functionality. I ensured application reliability through comprehensive unit testing and proactive technology upgrades.
<br/> <br/>
I played a key role in developing an Android app for primary school functionalities, conducting thorough testing and implementing fixes for seamless operation. Active in Agile processes, I collaborated on back-end integration, improving the application's performance and usability. `,
      location: "Vadodara, Gujarat, India",
    },
  ];
  activeJourneyId = "first";

  onExpChange(activeIndex: any) {
    this.journeys = this.journeys.map((ele, index) => {
      ele.active = index < activeIndex;
      return ele;
    });
  }
}
