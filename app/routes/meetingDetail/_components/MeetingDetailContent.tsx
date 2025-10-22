import type { Meeting } from '@/shared/types/entities';
import MeetingDetailContentMiddle from './MeetingDetailContentMiddle';

export default function MeetingDetailContent({
  meeting,
}: {
  meeting: Meeting;
}) {
  return (
    <div className="mt-5 w-full bg-amber-400">
      <MeetingDetailContentMiddle meeting={meeting} />
    </div>
  );
}
