
import { Skill, Experience } from './types';

export const FULL_NAME = "JUNIOR WILLIAM ANCHUNDIA SOZA";
export const TITLE = "Ingeniero en Sistemas | Magíster en DevOps";
export const BIO = "Profesional apasionado por la automatización y la infraestructura escalable. Con 8 años de trayectoria, he liderado la transformación digital optimizando ciclos de vida de software a través de arquitecturas en la nube, contenedores y cultura DevOps.";

export const SKILLS: Skill[] = [
  { name: "Kubernetes", level: 95, category: "Infrastructure", icon: "fa-dharmachakra" },
  { name: "AWS / Azure", level: 90, category: "Cloud", icon: "fa-cloud" },
  { name: "Terraform", level: 92, category: "Infrastructure", icon: "fa-code" },
  { name: "Docker", level: 98, category: "Infrastructure", icon: "fa-box-open" },
  { name: "CI/CD Pipelines", level: 95, category: "Automation", icon: "fa-sync" },
  { name: "Python / Bash", level: 85, category: "Development", icon: "fa-terminal" },
  { name: "Monitoring (Prometheus)", level: 88, category: "Infrastructure", icon: "fa-chart-line" },
  { name: "Jenkins / Gitlab CI", level: 94, category: "Automation", icon: "fa-tools" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Global Tech Solutions",
    role: "Senior DevOps Engineer",
    period: "2021 - Presente",
    description: [
      "Liderazgo en la migración de infraestructura On-Premise a AWS multi-región.",
      "Implementación de arquitecturas de microservicios con Kubernetes y Helm.",
      "Reducción de costos operativos en un 30% mediante la optimización de recursos Cloud."
    ]
  },
  {
    company: "Innovate Corp",
    role: "DevOps Specialist",
    period: "2018 - 2021",
    description: [
      "Automatización completa del pipeline de despliegue usando Jenkins y Ansible.",
      "Gestión de bases de datos críticas y sistemas de alta disponibilidad.",
      "Implementación de políticas de seguridad (DevSecOps) en el ciclo de CI/CD."
    ]
  },
  {
    company: "Core Systems S.A.",
    role: "Systems Administrator",
    period: "2015 - 2018",
    description: [
      "Administración de servidores Linux/Windows y redes corporativas.",
      "Desarrollo de scripts internos para automatización de tareas de mantenimiento.",
      "Soporte técnico avanzado y resolución de incidentes críticos."
    ]
  }
];
