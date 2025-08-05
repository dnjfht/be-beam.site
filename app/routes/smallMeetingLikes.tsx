import MeetingLikeCard from '@/components/molecules/MeetingLikeCard';
import useMyMeetingLikesQuery from '@/hooks/api/useMyMeetingLikesQuery';
import { metaTemplates } from '@/config/meta-templates';

export function meta() {
  return metaTemplates.smallMeetingLikes();
}

export default function SmallMeetingLikes() {
  const meetingLikes = useMyMeetingLikesQuery({
    page: 1,
    size: 10,
    type: 'small',
  });

  return (
    <div className="mt-8 grid grid-cols-3 gap-x-5 gap-y-8">
      {meetingLikes.data?.meetings.map((meeting) => (
        <MeetingLikeCard key={meeting.id} meeting={meeting} />
      ))}
    </div>
  );
}
