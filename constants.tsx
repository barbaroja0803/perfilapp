
import { Skill, Experience } from './types';

export const FULL_NAME = "JUNIOR WILLIAM ANCHUNDIA SOZA";
export const TITLE = "Full-Cycle Engineer | Software Architect | DevOps Lead";
export const BIO = "Desarrollador de software con 8 años de experiencia y especialización en automoción DevOps. Mi enfoque une la precisión del desarrollo de software de alto rendimiento con la robustez de la infraestructura moderna. No solo construyo el código; diseño el ecosistema donde vive, escala y evoluciona.";



export const SKILLS: Skill[] = [
  // Development
  { name: "Python", level: 92, category: "Backend", icon: "fa-brands fa-python", color: "#3776AB" },
  { name: "Flutter", level: 90, category: "Mobile", icon: "fa-mobile-screen-button", color: "#02569B" },
  { name: "iOS", level: 85, category: "Mobile", icon: "fa-brands fa-apple", color: "#000000" },
  { name: ".NET", level: 88, category: "Backend", icon: "fa-code", color: "#512BD4" },
  { name: "React / TS", level: 94, category: "Frontend", icon: "fa-laptop-code", color: "#61DAFB" },
  { name: "Node.js", level: 88, category: "Backend", icon: "fa-server", color: "#339933" },
  // Mobile / Ops
  { name: "Android", level: 88, category: "Mobile", icon: "fa-brands fa-android", color: "#3DDC84" },
  { name: "DevOps", level: 96, category: "Culture", icon: "fa-infinity", color: "#000000" },
  { name: "Kubernetes", level: 95, category: "Infrastructure", icon: "fa-dharmachakra", color: "#326CE5" },
  { name: "Docker", level: 94, category: "Infrastructure", icon: "fa-brands fa-docker", color: "#2496ED" },

  { name: "GitHub Actions", level: 96, category: "Automation", icon: "fa-bolt", color: "#2088FF" },
  { name: "Terraform", level: 90, category: "Infrastructure", icon: "fa-cloud", color: "#844FBA" },
  { name: "Ansible", level: 88, category: "Automation", icon: "fa-gears", color: "#EE0000" },
];




export const EXPERIENCES: Experience[] = [
  {
    company: "Global Tech Solutions",
    role: "Senior Full-Cycle Engineer",
    period: "2021 - Presente",
    description: [
      "Diseño y desarrollo de microservicios con arquitectura hexagonal.",
      "Liderazgo en la orquestación de clústeres EKS para soportar +1M de peticiones concurrentes.",
      "Optimización del performance de aplicaciones React mediante SSR y edge caching."
    ]
  },
  {
    company: "Innovate Corp",
    role: "Software & DevOps Specialist",
    period: "2018 - 2021",
    description: [
      "Desarrollo de APIs robustas en Python/FastAPI integradas con pipelines de CI/CD.",
      "Automatización de infraestructura como código (IaC) para entornos de staging y prod.",
      "Implementación de sistemas de mensajería asíncrona con RabbitMQ y Kafka."
    ]
  },
  {
    company: "Core Systems S.A.",
    role: "Full Stack Developer",
    period: "2015 - 2018",
    description: [
      "Desarrollo de aplicaciones web empresariales utilizando el stack MEAN.",
      "Administración y tuning de bases de datos relacionales para optimización de queries.",
      "Migración de aplicaciones legacy a arquitecturas modernas basadas en contenedores."
    ]
  }
];
