interface Player {
  id: string;
  name: string;
  firstName: string;
  position: PlayerPosition;
  team: string; // Reference to the Teams model
  statistics: PlayerStatistics;
  news: News[];
}

enum PlayerPosition {
  ATTACKER,
  MIDFIELDER,
  DEFENDER,
}

interface PlayerStatistics {
  goalsScored: number;
  assists: number;
  redCards: number;
}

interface News {
  title: string;
  body: string;
  source: string;
  date: Date;
}
