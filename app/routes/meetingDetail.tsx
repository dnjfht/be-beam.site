import { Suspense } from 'react';
import { useParams } from 'react-router';
import useMeetingQuery from '@/hooks/api/useMeetingQuery';
import { useModalStore } from '@/stores/useModalStore';

import clsx from 'clsx';
import CommonTemplate from '@/components/templates/CommonTemplate';
import LoadingSpinner from '@/components/molecules/LoadingSpinner';
import Slider from '@/components/organisms/Slider';
import MeetingDetailCard from '@/components/organisms/MeetingDetailCard';
import MeetingDetailContent from '@/components/sections/MeetingDetailContent';
import MeetingDetailMeetingReviewsContainer from '@/components/sections/MeetingDetailMeetingReviewsContainer';
import Text from '@/components/atoms/text/Text';
import { Button } from '@/components/atoms/button/Button';

export function meta() {
  return [
    { title: '모임 상세페이지' },
    { name: 'description', content: '모임 상세정보를 확인하세요.' },
  ];
}

// api 들어오면 loader를 사용하여 서버에서 데이터 프리패치
// 그때는 useSuspenseQuery와 함께 Suspense 사용 가능
export async function loader() {
  return { data: [] };
}

export default function MeetingDetail() {
  // const { data } = loaderData;
  const id = Number(useParams().meetingId);
  const { data: meeting } = useMeetingQuery(id);
  const { open } = useModalStore();
  console.log(meeting);

  return (
    <CommonTemplate>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="flex items-start gap-8">
          <div className="w-full max-w-[970px]">
            <Slider
              images={meeting?.meetingImages}
              isCount={true}
              slideWidth="w-full"
              slideHeight="h-[657px]"
              delay={5000}
            />
            <MeetingDetailContent meeting={meeting} />
            <MeetingDetailMeetingReviewsContainer meetingId={id} />
          </div>

          <div className="sticky top-[100px] h-fit flex-1">
            <MeetingDetailCard meeting={meeting} />
            <div
              className={clsx(
                'mt-5 box-border flex w-full flex-col items-center rounded-xl border-1 border-gray-300 p-12',
                meeting?.reviewable ? 'block' : 'hidden',
              )}
            >
              <Text color="gray-600" className="mb-6">
                참여한 모임은 어떠셨나요?
                <br />
                소중한 경험을 함께 나눠요🥰
              </Text>
              <Button
                size="sm"
                className="w-82"
                onClick={() =>
                  open('EDIT_MEETING_REVIEW_MODAL', {
                    meeting,
                  })
                }
              >
                ✍️ 후기 작성하기
              </Button>
            </div>
          </div>
        </div>
      </Suspense>
    </CommonTemplate>
  );
}
