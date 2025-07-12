import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlineGray' | 'outlineBlack' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
}

export interface TextProps {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'div';
  color?:
    | 'black'
    | 'white'
    | 'gray-900'
    | 'gray-800'
    | 'gray-700'
    | 'gray-600'
    | 'gray-500'
    | 'gray-400'
    | 'gray-300'
    | 'gray-200'
    | 'gray-100'
    | 'purple'
    | 'brown'
    | 'primary';
  variant?: TypographyVariant;
  className?: string;
  onClick?: () => void;
}

export type TypographyVariant =
  | 'H0_Bold'
  | 'H1_Bold'
  | 'H2_Semibold'
  | 'T1_Regular'
  | 'T2_Semibold'
  | 'T3_Semibold'
  | 'T4_Regular'
  | 'B1_Semibold'
  | 'B2_Medium'
  | 'B3_Regular'
  | 'C1_Semibold'
  | 'C2_Regular'
  | 'C3_Regular';

export interface LogoProps {
  variant?: 'header' | 'auth' | 'footer';
  clickable?: boolean;
  className?: string;
}

export interface GridGroupProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 12;
  className?: string;
}

export interface SideBarSectionItems {
  to: string;
  title: string;
  onClick: () => void;
}

export interface FiltersType {
  label: string;
  options: string[];
  values: string[];
}

interface MeetingScheduleType {
  address: string;
  addressDetail: string;
  content: string;
  meetingEndTime: string;
  meetingStartTime: string;
}

export interface MeetingDetailType {
  id: number;
  name: string;
  introduction: string;
  topic: string;
  hashtags: string[];
  address: string;
  recruitingState: string;
  recruitmentType: string;
  selectionType: string;
  meetingMode: string;
  recruitingStartTime: string;
  recruitingEndTime: string;
  minParticipants: number;
  maxParticipants: number;
  paymentAmount: number;
  liked: boolean;
  likesCount: number;
  meetingImages: string[];
  schedules: MeetingScheduleType[];
  info: string;
  applicantCount: number;
  participantCount: number;
  reviewable: boolean;
  userStatus:
    | '신청전'
    | '신청중'
    | '신청취소중'
    | '참여중'
    | '중도이탈신청중'
    | '모임완료'
    | string;
  applyMeetingState: boolean;
  participateMeetingState: boolean;
  cancelMeetingState: boolean;
  leaveMeetingState: boolean;

  hostId: number;
  hostName: string;
  hostImage: string;
  hostDescription: string;
}

export interface GuideBookType {
  id: number;
  title: string;
  image: string;
  description: string;
  level: string;
  time: string;
  type: string;
  targetType: string;
}

export interface RecommendationsGuideBookType {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface FilterOption {
  text: string;
  value: string;
}

export interface GuideBookType {
  id: number;
  title: string;
  guidbookType: string;
  targetType: string;
  hashtags: string[];
  level: string;
  time: string;
  description: string;
  benefits: string[];
  images: string[];
  file: string;
  recommendations: RecommendationsGuideBookType[];
}

export interface GetCreateMeetingDetailDataType {
  selectionType: string;
  meetingMode: string;
  minParticipants: number;
  maxParticipants: number;
  recruitingStartTime: string;
  recruitingEndTime: string;
  schedules: {
    content: string;
    address: string;
    addressDetail: string;
    meetingDate: string;
    meetingStartTime: string;
    meetingEndTime: string;
  }[];
  paymentAmount: number;
  info: string;
}

export interface CreatedMeetingDetailStateType {
  intro: {
    thumbnailImagePreview: string;
    thumbnailImage: null | File;
    name: string;
    introduction: string;
    topic: string;
    hashtags: string[];
    totalImages: string[];
    addImages: File[] | [];
    existingImages: string[];
    hostDescription: string;
  };
  detail: {
    selectionType: string;
    mode: string;
    minParticipants: number;
    maxParticipants: number;
    schedules: {
      content: string | number;
      address: string;
      addressDetail: string | undefined;
      meetingDate: string;
      meetingStartTime: string;
      meetingEndTime: string;
    }[];
    recruitingStartTime: string;
    recruitingEndTime: string;
    paymentAmount: number;
    info: string;
  };
}

export interface CreateMeetingType {
  thumbnailImage: File | null;
  thumbnailImagePreview: string | '';
  name: string;
  recruitmentType: '정기모임' | '소모임' | undefined;
  selectionType: '선발형' | '선착순' | null;
  meetingMode: '온라인' | '오프라인' | '혼합' | null;
  topicId: number | null;
  hashtags: string[];
  isGuideBookRefer: 'false' | 'true';
  guidbookReferenceId: null | number | undefined;
  introduction: string;
  images: [] | File[];
  imagesPreview: [] | string[];
  minParticipants: number;
  maxParticipants: number;
  hostDescription: string;
  recruitingStartTime: Date | null;
  recruitingEndTime: Date | null;
  paymentAmount: number;
  info: string;
  schedules: {
    meetingDate: string;
    meetingStartTime: string;
    meetingEndTime: string;
    address: string;
    addressDetail: string;
  }[];
}
