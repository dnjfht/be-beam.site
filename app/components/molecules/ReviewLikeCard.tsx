import { Link } from 'react-router';
import StarIcon from '../atoms/icons/StarIcon';
import ThreeDotHorizontalIcon from '../atoms/icons/ThreeDotHorizontalIcon';
import ArrowRightIcon from '../atoms/icons/ArrowRightIcon';
import ReviewLikeButton from '../atoms/ReviewLikeButton';

interface ReviewLikeCardProps {
  reviewId: number;
  profileImg: string;
  nickname: string;
  createdAt: string;
  rating: number;
  text: string;
  images: string[];
  meeting: {
    id: number;
    name: string;
    link: string;
  };
  liked: boolean;
  likesCount: number;
  myReview: boolean;
}

const formatDate = (dateString: string): string => {
  return new Date(dateString)
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\. /g, '.')
    .replace(/(\d{4})\.(\d{2})\.(\d{2}).*/, '$1.$2.$3');
};

export default function ReviewLikeCard({
  reviewId,
  profileImg,
  nickname,
  createdAt,
  rating,
  text,
  images,
  meeting,
  liked,
  likesCount,
}: ReviewLikeCardProps) {
  return (
    <div className="rounded-2xl border border-gray-300 px-7 pt-8 pb-6">
      {/* 카드 헤더 */}
      <div className="flex items-start justify-between">
        <div className="flex gap-4.5">
          <img
            src={profileImg}
            alt={`${nickname}의 프로필 이미지`}
            className="size-10 rounded-full"
          />
          <div className="flex flex-col gap-1">
            <p className="text-b2 text-gray-800">{nickname}</p>
            <p className="text-c2 text-gray-600">{formatDate(createdAt)}</p>
          </div>
        </div>
        <button>
          <ThreeDotHorizontalIcon className="size-6" />
        </button>
      </div>

      {/* 별점 */}
      <div className="mt-4 flex">
        {Array.from({ length: rating }, (_, index) => (
          <span key={index}>
            <StarIcon className={'size-6 text-gray-700'} />
          </span>
        ))}
      </div>

      {/* 리뷰 내용 */}
      <div className="mt-4">
        <p className="text-b3 text-gray-600">{text}</p>
      </div>

      {/* 이미지 그리드 */}
      {images.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-1.5">
          {images.map((image, index) => (
            <img
              key={`${reviewId}-img-${index}`}
              src={image}
              alt={`리뷰 이미지 ${index + 1}`}
              className="aspect-square rounded-lg object-cover"
            />
          ))}
        </div>
      )}

      {/* 모임 링크 */}
      <div className="mt-6">
        <Link to={meeting.link} className="flex items-center gap-1">
          <p className="text-t3 text-gray-600">
            `{meeting.name}` 모임 보러가기
          </p>
          <ArrowRightIcon className="size-6 shrink-0 text-gray-600" />
        </Link>
      </div>

      {/* 좋아요 버튼 */}
      <div className="mt-8">
        <ReviewLikeButton
          reviewId={reviewId}
          liked={liked}
          likesCount={likesCount}
        />
      </div>
    </div>
  );
}
