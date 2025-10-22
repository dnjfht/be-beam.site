import { useNavigate } from 'react-router';

import useMeetingQuery from '@/features/meetings/hooks/useMeetingQuery';

import { useModalStore } from '@/shared/stores/useModalStore';

import { cn } from '@/styles/tailwind';

import MeetingDetailContentWrap from './MeetingDetailContentWrap';

import Slider from '../../../shared/components/common/Slider';

import MeetingDetailCard from './MeetingDetailCard';

import MeetingDetailCardTop from './MeetingDetailCardTop';

import MeetingDetailHost from './MeetingDetailHost';

import Text from '../../../shared/components/ui/Text';

import { Button } from '../../../shared/components/ui/Button';

import TitleAndDes from '@/shared/components/common/TitleAndDes';

import GuideBookRecommendationCard from '@/features/guidebooks/components/GuideBookRecommendationCard';

export default function MeetingDetailWrap({ id }: { id: number }) {
  const navigate = useNavigate();

  const { open } = useModalStore();

  const { data: meeting } = useMeetingQuery(id);

  console.log(meeting);

  return (
    <div className="relative flex w-full items-start gap-8">
      <div className="w-full min-w-0 lg:max-w-[60%] xl:max-w-[70%] 2xl:max-w-[970px]">
        <Slider
          images={meeting?.meetingImages}
          isCount={true}
          slideWidth="w-full"
          slideHeight="lg:h-[557px]"
          delay={5000}
          isBtn="lg:flex hidden"
          classNames="lg:mt-0 mt-[72px] lg:rounded-xl rounded-none"
          imageStyle="rounded-none lg:aspect-auto aspect-square lg:rounded-xl bg-yellow-200"
        />

        <div className="absolute top-[94%] z-10 w-full rounded-t-4xl bg-[#e9e9e9] shadow-2xl lg:relative lg:bg-white lg:bg-none lg:shadow-none">
          <MeetingDetailCardTop meeting={meeting} isBlock="lg:hidden block" />

          <MeetingDetailHost
            hostImg={meeting?.hostImage}
            hostName={meeting?.hostName}
            hostDes={meeting?.hostDescription}
            onClick={() => navigate(`/host/${meeting?.hostId}`)}
          />

          <div
            className={cn(
              'mt-5 box-border flex w-full flex-col items-center rounded-xl border-1 border-gray-300 bg-white p-12 text-center',
              meeting?.reviewable ? 'block' : 'hidden',
            )}
          >
            <Text color="gray-600" className="mb-6">
              참여한 모임은 어떠셨나요?
              <br />
              소중한 경험을 함께 나눠요🥰
            </Text>

            <Button
              size="md"
              className="w-full"
              onClick={() =>
                open('EDIT_MEETING_REVIEW_MODAL', {
                  meeting,
                })
              }
            >
              ✍️ 후기 작성하기
            </Button>
          </div>

          <MeetingDetailContentWrap meeting={meeting} />

          {meeting?.guidebook && (
            <TitleAndDes
              title="참고한 가이드북"
              wrapStyle="mb-14 bg-white p-4 box-border"
            >
              <GuideBookRecommendationCard
                data={meeting?.guidebook}
                onClick={() => navigate(`/guideBook/${meeting?.guidebook.id}`)}
              />
            </TitleAndDes>
          )}
        </div>
      </div>

      <div className="sticky top-[100px] hidden h-fit w-full flex-1 lg:block">
        <MeetingDetailCard meeting={meeting} />
        <div
          className={cn(
            'mt-5 box-border flex w-full flex-col items-center rounded-xl border-1 border-gray-300 bg-white p-12 text-center',
            meeting?.reviewable ? 'block' : 'hidden',
          )}
        >
          <Text color="gray-600" className="mb-6">
            참여한 모임은 어떠셨나요?
            <br />
            소중한 경험을 함께 나눠요🥰
          </Text>

          <Button
            size="md"
            className="w-full"
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
  );
}
