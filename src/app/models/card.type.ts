// type for the card
export interface Card {
  id: number;
  full_name: string;
  description: string;
  image_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
