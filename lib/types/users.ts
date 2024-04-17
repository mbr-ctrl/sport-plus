interface User {
  uid: string;
  name: string;
  firstName: string;
  email: string;
  photoURL: string;
  preferences: UserPreferences;
  interactionHistory: Interaction[];
}

interface UserPreferences {
  favoriteTeam: string;
  preferredLanguage: string;
}

interface Interaction {
  type: InteractionType;
  timestamp: Date;
  data: any;
}

enum InteractionType {
  ARTICLE_READ,
  MATCH_WATCHED,
}
