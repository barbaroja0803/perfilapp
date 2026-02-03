
export interface Skill {
  name: string;
  level: number;
  category: 'Infrastructure' | 'Automation' | 'Cloud' | 'Development';
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
