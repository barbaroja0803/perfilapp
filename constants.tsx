
import { Skill, Experience } from './types';

export const FULL_NAME = "JUNIOR WILLIAM ANCHUNDIA SOZA";
export const TITLE = "Full-Cycle Engineer | Software Architect | DevOps Lead";
export const BIO = "Arquitecto de soluciones integrales con 8 años de experiencia. Mi enfoque une la precisión del desarrollo de software de alto rendimiento con la robustez de la infraestructura moderna. No solo construyo el código; diseño el ecosistema donde vive, escala y evoluciona.";

export const SKILLS: Skill[] = [
  // Development Core
  { name: "Flutter / Python", level: 92, category: "Development", icon: "fa-code" },
  { name: "React / TS", level: 88, category: "Development", icon: "fa-laptop-code" },
  { name: "Node.js / .net", level: 85, category: "Development", icon: "fa-server" },
  { name: "PostgreSQL / Sql server", level: 90, category: "Development", icon: "fa-database" },
  // Ops Core
  { name: "Kubernetes", level: 95, category: "Infrastructure", icon: "fa-dharmachakra" },
  { name: "Docker", level: 94, category: "Infrastructure", icon: "fa-cloud-arrow-up" },
  { name: "AWS / Azure", level: 92, category: "Cloud", icon: "fa-brands fa-aws" },
  { name: "GitHub Actions", level: 96, category: "Automation", icon: "fa-bolt" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Global Tech Solutions",
    role: "Senior Full-Cycle Engineer",
    period: "2021 - Presente",
    description: [
      "Diseño y desarrollo de microservicios en Go con arquitectura hexagonal.",
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
