type IShow = {
  id: number;
  name: string;
  language: string;
  genres: string[];
  status: string;
  type: string;
  runtime: number;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  image: {
    medium?: string;
    original?: string;
  };
  summary: string;
};

interface IShowBaseData {
  shows: IShow[];
  list: IShow[];
  offset: number;
  pageLimit: number;
  currentPage: number;
  pageNumberLimit: number;
  totalItemSize: number;
}

export type { IShow, IShowBaseData };
