interface Pagefind {
  search: (query: string) => Promise<PagefindResponse>
}

interface PagefindResponse {
  results: PagefindResult[]
}

interface PagefindResult {
  id: string
  data: () => Promise<PagefindDocument>
}

interface PagefindDocument {
  url: string
  excerpt: string
  filters: {
    author: string
  }
  meta: {
    title: string
    image: string
  }
  content: string
  word_count: number
}
