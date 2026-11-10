
import { Skill, Experience, Education } from './types';

export const FULL_NAME = "WILLIAM ANCHUNDIA SOZA";
export const TITLE = "DevOps | Solutions Architect AWS | Desarrollador Senior Full Stack";
export const BIO = "Desarrollador de software Senior Full Stack, Solutions Architect en AWS y especialista en DevOps. Mi enfoque une la precisión del desarrollo de software de alto rendimiento con la robustez y automatización de la infraestructura moderna en la nube.";



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
    company: "Freelancer · Contrato temporal (En remoto)",
    role: "DevOps Engineer",
    period: "nov. de 2025 - actualidad",
    description: [
      "Automatización en tareas repetitivas mediante scripts y herramientas DevOps, optimizando tiempos operativos.",
      "Migración de arquitecturas heredadas (on-premise) hacia entornos de nube pública o híbrida, reduciendo costos operativos.",
      "Implementación de estrategias de despliegue avanzado como Blue-Green o Canary para asegurar lanzamientos con cero tiempo de inactividad (Zero Downtime)."
    ]
  },
  {
    company: "GUAYATUNA S.A · Jornada completa (Presencial)",
    role: "DevOps - Analista programador",
    period: "ago. de 2023 - nov. de 2025",
    description: [
      "Automaticé tareas repetitivas mediante scripts y herramientas DevOps, optimizando tiempos operativos.",
      "Trabajé con contenedores y herramientas DevOps para mejorar la portabilidad y consistencia de los entornos.",
      "Participé en la implementación de pipelines de integración y despliegue continuo (CI/CD).",
      "Di soporte a equipos de desarrollo durante el despliegue de aplicaciones y resolución de incidencias.",
      "Contribuí a la documentación de procesos técnicos y buenas prácticas de operación."
    ]
  },
  {
    company: "Telconet · Jornada completa (Guayas, Ecuador · En remoto)",
    role: "Ingeniero de software",
    period: "abr. de 2023 - jun. de 2023",
    description: [
      "Diseñé y creé software en diferentes plataformas.",
      "Aporté en mejoras continuas a software ya desarrollados."
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: "Escuela de Posgrado Newman",
    degree: "Maestría en Desarrollo y Operaciones de Software (DevOps), Computer Science",
    period: "ago. de 2024 – nov. de 2025",
    icon: "fa-graduation-cap",
    highlights: [
      "Ingeniero DevOps",
      "Gestor de proyectos en la nube",
      "Ingeniero de automatización",
      "Director de QA (Quality Assurance) o Director de análisis de calidad",
      "Ingeniero SRE (Site Reliability Engineer) o Ingeniero de confiabilidad",
      "Consultor de BI (Business Intelligence) o Consultor de Inteligencia de Negocio",
      "Jefe de proyecto Big Data",
      "Arquitecto DevOps o Arquitecto Cloud"
    ]
  },
  {
    institution: "ULEAM",
    degree: "Ingeniero en Sistemas, Engineering Science",
    period: "feb. de 2013 – may. de 2018",
    icon: "fa-building-columns"
  },
  {
    institution: "TOTAL EDUCATION PROGRAM",
    degree: "Inglés B2 Cambridge",
    period: "oct. de 2026 – Actualidad",
    status: "Actualidad",
    icon: "fa-language"
  }
];
