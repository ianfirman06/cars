
export interface Car {
  id: string;
  name: string;
  model: string;
  year: number;
  price: string;
  specs: {
    acceleration: string;
    topSpeed: string;
    power: string;
  };
  image: string;
  description: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
