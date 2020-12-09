interface SearchPlaceArgs {
  secret: ApiSecret;
  request: SearchPlaceRequest;
}

interface ApiSecret {
  clientId: string;
  clientSecret: string;
}

interface SearchPlaceRequest {
  //     query	string	Y	-	검색을 원하는 문자열로서 UTF-8로 인코딩한다.
  query: string;
  // display	integer	N	1(기본값), 5(최대)	검색 결과 출력 건수 지정
  display?: number;
  // start	integer	N	1(기본값), 1(최대)	검색 시작 위치로 1만 가능
  start?: number;
  // sort	string	N	random (기본값), comment	정렬 옵션: random(유사도순), comment(카페/블로그 리뷰 개수 순)
  sort?: "random" | "comment";
}

interface SearchPlaceResult {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: SearchPlaceItem[];
}

interface SearchPlaceItem {
  title?: string;
  link?: string;
  category?: string;
  description?: string;
  telephone?: string;
  address?: string;
  roadAddress?: string;
  mapx?: string;
  mapy?: string;
}
