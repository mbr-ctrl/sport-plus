interface Team {
  id: string;
  name: string;
  logo: string;
  squad: Player[]; // References to the Players model
  schedule: Match[]; // References to the Matches model
  trophies: Trophy[];
}

interface Trophy {
  competition: string;
  year: number;
}
