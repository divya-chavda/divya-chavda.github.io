import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  combinedSkills = [
    {
      skillName: "Java",
      desc: "Over 6.5 years of experience developing scalable enterprise applications. Expertise in designing robust back-end systems, microservices, and REST APIs, ensuring seamless integrations and efficient data handling in diverse projects.",
    },
    {
      skillName: "Spring",
      desc: "3+ years of experience with Spring Boot for building microservices. Spearheaded version upgrades, implemented RESTful APIs, and ensured secure and efficient application performance in agile environments.",
    },
    {
      skillName: "Angular",
      desc: "4+ years developing dynamic web applications with responsive UIs using Material Design and SCSS. Delivered intuitive, scalable solutions for diverse industries by leveraging Angular’s advanced capabilities.",
    },
    {
      skillName: "SQL",
      desc: "6+ years of experience managing relational databases like MySQL. Proficient in writing optimized queries, ensuring data accuracy, and integrating databases into back-end systems for seamless performance.",
    },
    {
      skillName: "Kafka",
      desc: "Implemented Kafka in enterprise applications to enable real-time data streaming and communication. Enhanced system reliability and scalability, with expertise in event-driven architectures.",
    },
    {
      skillName: "OpenShift",
      desc: "Deployed and managed microservices in OpenShift, ensuring scalable, reliable, and containerized solutions for cloud-native applications. Optimized deployments to streamline resource usage.",
    },
    {
      skillName: "Node.js",
      desc: "3+ years of experience building scalable back-end services. Proficient in creating REST APIs, handling asynchronous operations, and integrating Node.js with front-end frameworks like Angular.",
    },
    {
      skillName: "Express",
      desc: "Delivered efficient middleware solutions and APIs with Express.js. Streamlined back-end development processes for robust, high-performance web applications in Node.js ecosystems.",
    },
    {
      skillName: "JavaScript",
      desc: "Over 6.5 years of hands-on experience in dynamic web applications. Proficient in creating responsive UIs, integrating APIs, and adding interactive features to web platforms.",
    },
    {
      skillName: "TypeScript",
      desc: "4+ years leveraging TypeScript for type-safe coding in Angular and Node.js. Improved debugging, code maintenance, and scalability with advanced TS features in full-stack development.",
    },
    {
      skillName: "HTML",
      desc: "6+ years crafting semantic, responsive web structures. Ensured cross-browser compatibility and optimal user experience by designing well-structured, visually appealing web interfaces.",
    },
    {
      skillName: "CSS",
      desc: "Expert in CSS, SCSS, and Bootstrap with 6+ years of experience. Created responsive, visually appealing web designs and enhanced aesthetics to ensure user engagement on diverse platforms.",
    },
    {
      skillName: "GitHub",
      desc: "6+ years managing version control and collaborative workflows. Implemented CI/CD pipelines to improve delivery cycles and maintain high-quality code across diverse projects.",
    },
    {
      skillName: "Bitbucket",
      desc: "Utilized Bitbucket for 6+ years to manage repositories, conduct code reviews, and enable team collaboration through effective branch management and workflow optimization.",
    },
    {
      skillName: "MaterialUI",
      desc: "Customized modern, responsive interfaces with MaterialUI. Delivered scalable Angular applications, ensuring consistency and enhancing user experience with advanced UI components.",
    },
    {
      skillName: "NPM",
      desc: "Created reusable Angular packages and managed dependencies efficiently using npm. Enhanced application modularity and streamlined project development across teams.",
      logo: "npm",
    },
    {
      skillName: "MongoDB",
      desc: "3+ years of experience with MongoDB, creating scalable NoSQL data models and integrating with Node.js backends to deliver efficient, high-performance web applications.",
    },
    {
      skillName: "LeetCode",
      desc: "Solved 800+ LeetCode challenges, showcasing advanced problem-solving skills. Demonstrated expertise in algorithms and coding practices, contributing to enhanced development proficiency.",
    },
    {
      skillName: "jQuery",
      desc: "Used jQuery for dynamic content and AJAX in early projects. Enhanced user interactions and improved functionality by leveraging plugins for responsive web applications.",
    },
  ];
  lengths = {
    skills: 9,
    midSkills: 6,
    secondTopSkills: 3,
    topSkill: 1,
  };
  skills: { skillName: any; desc: any }[] = [];
  midSkills: { skillName: any; desc: any }[] = [];
  secondTopSkills: { skillName: any; desc: any }[] = [];
  topSkill: { skillName: any; desc: any }[] = [];
  isMobile = false;
  activeSkill: { skillName: any; desc: any } | undefined;
  ngOnInit() {
    if (window.screen.availWidth < 690) {
      this.isMobile = true;
    }

    const shuffledSkills = [...this.combinedSkills].sort(
      () => Math.random() - 0.5
    );
    this.activeSkill = shuffledSkills.filter(
      (e) => e.skillName.toLowerCase() === "java"
    )[0];
    if (!this.isMobile) {
      this.skills = shuffledSkills.splice(0, this.lengths.skills);
      this.midSkills = shuffledSkills.splice(0, this.lengths.midSkills);
      this.secondTopSkills = shuffledSkills.splice(
        0,
        this.lengths.secondTopSkills
      );
      this.topSkill = shuffledSkills.splice(0, this.lengths.topSkill);

      console.log(this.activeSkill);
    } else {
      this.skills = shuffledSkills;
    }
  }
  onChangeActiveTech(item: { skillName: any; desc: any }) {
    this.activeSkill = item;
    console.log(this.activeSkill);
  }
  getSkill(logoName: String) {
    return logoName.toLowerCase().replace(".", "") + "_skill";
  }
}
