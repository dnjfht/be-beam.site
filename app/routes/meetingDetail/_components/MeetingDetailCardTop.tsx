import type { Meeting } from '@/shared/types/entities';
import { Tag } from '../../../shared/components/ui/Tag';
import Text from '../../../shared/components/ui/Text';
import RecruitmentTypeAndTopic from './RecruitmentTypeAndTopic';
import TitleAndDescription from '../../../shared/components/common/TitleAndDes';

export default function MeetingDetailCardTop({
  meeting,
}: {
  meeting: Meeting;
}) {
  return (
    <div className="w-full">
      <RecruitmentTypeAndTopic
        recruitmentType={meeting?.recruitmentType}
        topic={meeting?.topic}
      />

      <Text variant="H2_Semibold" className="mt-6">
        <span className="mr-2 text-gray-500">{meeting?.recruitmentStatus}</span>
        {meeting?.name}
      </Text>

      <div className="mt-4 flex items-center gap-x-2 text-b1">
        <Tag
          variant="primary"
          className="rounded-full border-1 border-primary px-5 py-4"
        >
          {meeting?.meetingMode}
        </Tag>
        <Tag
          variant="primary"
          className="rounded-full border-1 border-primary px-5 py-4"
        >
          {meeting?.selectionType}
        </Tag>
      </div>

      <TitleAndDescription
        title="모집 기간"
        titleStyle="text-b2 text-gray-600"
        wrapStyle="mt-6 flex items-center gap-2"
      >
        <Text variant="B2_Medium">
          {`${meeting?.recruitingStartTime?.slice(0, 10)} ~ ${meeting?.recruitingEndTime?.slice(0, 10)}`}
        </Text>
      </TitleAndDescription>

      <TitleAndDescription
        title="모집 인원"
        titleStyle="text-b2 text-gray-600"
        wrapStyle="mt-1 flex items-center gap-2"
      >
        <Text variant="B2_Medium">
          {`${meeting?.minParticipants}명 ~ ${meeting?.maxParticipants}명`}
        </Text>
      </TitleAndDescription>

      <div className="mt-5 flex items-center gap-2">
        {meeting?.hashtags?.map((hashtag, idx) => (
          <Tag
            key={idx}
            variant="primary"
            className="rounded-md border-none bg-[#FFE2CE] px-2 py-1 text-b1"
          >
            {`#${hashtag}`}
          </Tag>
        ))}
      </div>
    </div>
  );
}
