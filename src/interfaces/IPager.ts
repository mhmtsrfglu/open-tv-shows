type IPager = {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number[];
};

interface IPagerProps {
  pager: IPager;
}

export type { IPager, IPagerProps };
