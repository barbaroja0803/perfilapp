

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  color?: string;
}


export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  status?: string;
  highlights?: string[];
  icon?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
