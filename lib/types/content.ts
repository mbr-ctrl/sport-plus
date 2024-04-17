interface Content {
  id: string;
  type: ContentType; // "article", "video", "photo"
  title: string;
  author: string;
  publicationDate: Date;
  content: string | string[]; // Text for articles, URL for videos/photos
  category: ContentCategory; // "transfers", "market", "analysis"
  tags: string[];
}

enum ContentType {
  ARTICLE,
  VIDEO,
  PHOTO,
}

enum ContentCategory {
  TRANSFERS,
  MARKET,
  ANALYSIS,
}
