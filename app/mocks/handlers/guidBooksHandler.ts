import { http, HttpResponse } from 'msw';

import guidBooksMockData from '../mockGuidBooks.json';

const guidBookHandlers = [
  // 가이드북 리스트 GET 요청
  http.get('/api/web/v1/guidbooks', ({ request }) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    // 필요한 queryParam을 추출
    const type = searchParams.get('type') ?? 'all';
    const targetType = searchParams.get('target-type') ?? 'all';
    const level = searchParams.get('level') ?? 'all';
    const time = searchParams.get('time') ?? 'all';
    const cursor = parseInt(searchParams.get('cursor') || '0');
    const size = parseInt(searchParams.get('size') || '12');

    // 필터링
    let filteredGuideBooks = guidBooksMockData.guideBooks;

    if (type !== 'all') {
      filteredGuideBooks = filteredGuideBooks.filter((m) => m.type === type);
    }

    if (targetType !== 'all') {
      filteredGuideBooks = filteredGuideBooks.filter(
        (m) => m.targetType === targetType,
      );
    }

    if (level !== 'all') {
      filteredGuideBooks = filteredGuideBooks.filter((m) => m.level === level);
    }

    if (time !== 'all') {
      filteredGuideBooks = filteredGuideBooks.filter((m) => m.time === time);
    }

    const paginatedGuideBooks = filteredGuideBooks.slice(cursor, cursor + size);

    return HttpResponse.json({
      isSuccess: true,
      code: 1000,
      message: '요청에 성공하였습니다.',
      result: {
        pageInfo: {
          nextCursor: cursor + size,
          size,
          hasNext: cursor + size < filteredGuideBooks.length,
        },
        guideBooks: paginatedGuideBooks,
      },
    });
  }),
];

export default guidBookHandlers;
