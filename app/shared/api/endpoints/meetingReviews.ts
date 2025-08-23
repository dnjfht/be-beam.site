import type { meetingReviewFilterType } from '@/routes/meetingDetail/_components/MeetingDetailMeetingReviewsContainer';
import { API_V2_BASE_URL } from '@/shared/constants/api';
import { axiosInstance } from '@/shared/api/axios';
import type { APIResponse, CursorPaginationResult } from '@/shared/types/api';
import type { Meeting, Review } from '@/shared/types/entities';
import { type AxiosRequestConfig } from 'axios';

export type MeetingReviewsResult = {
  reviews: {
    reviewId: Review['reviewId'];
    profileImg: Review['profileImg'];
    nickname: Review['nickname'];
    rating: Review['rating'];
    text: Review['text'];
    images: Review['images'];
    createdAt: Review['createdAt'];
    likesCount: Review['likesCount'];
    liked: Review['liked'];
    myReview: Review['myReview'];
    meeting: {
      id: Meeting['id'];
      name: Meeting['name'];
    };
  }[];
  pageInfo: CursorPaginationResult;
};

export type MeetingReviewsParams = {
  meetingId: number;
  filters: meetingReviewFilterType;
};

// TODO: params를 별도의 타입으로 분리 필요
export const getMeetingReviews = async (
  params: MeetingReviewsParams,
  pageParam: number,
  axiosRequestConfig?: AxiosRequestConfig,
) => {
  const searchParams = new URLSearchParams({
    sort: params.filters.sort,
    type: params.filters.type,
    rating: params.filters.rating.toString(),
    cursor: pageParam.toString(),
    size: '12',
  });

  const res = await axiosInstance<APIResponse<MeetingReviewsResult>>({
    baseURL: API_V2_BASE_URL,
    method: 'GET',
    url: `/meetings/${params.meetingId}/reviews?${searchParams.toString()}`,
    ...axiosRequestConfig,
  });
  const data = res.data;
  return data.result;
};
