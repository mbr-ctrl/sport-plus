interface League {
  id: string;
  name: string;
  season: string;
  teams: string[]; // References to the Teams model
  standings: Standing[];
  schedule: Match[]; // References to the Matches model
  results: MatchResult[]; // References to the MatchResult model
}

interface Standing {
  team: string; // Reference to the Teams model
  position: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
}

interface Match {
  id: string;
  homeTeam: string; // Reference to the Teams model
  awayTeam: string; // Reference to the Teams model
  date: Date;
  kickoffTime: Date;
  stadium: string;
  venue: string;
  status: MatchStatus; // "pending", "in_progress", "completed"
  score?: MatchScore; // Only set for completed matches
}

enum MatchStatus {
  PENDING,
  IN_PROGRESS,
  COMPLETED,
}

interface MatchScore {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface MatchResult {
  id: string; // Reference to the Match model
  homeTeamGoals: number;
  awayTeamGoals: number;
  report?: string; // Optional match report
}
