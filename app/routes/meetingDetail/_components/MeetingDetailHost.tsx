// dumb 패턴 컴포넌트. UI 관련 로직만

import MeetingDetailContentHostProfile from './MeetingDetailContentHostProfile';
import Text from '../../../shared/components/ui/Text';

interface MeetingDetailHostProps {
  hostImg: string;
  hostName: string;
  hostDes: string;
  onClick: () => void;
}

export default function MeetingDetailHost({
  hostImg,
  hostName,
  hostDes,
  onClick,
}: MeetingDetailHostProps) {
  return (
    <div
      onClick={onClick}
      className="mt-5 box-border flex w-full items-stretch gap-14 rounded-xl bg-gray-100 px-10 py-7"
    >
      <MeetingDetailContentHostProfile hostImg={hostImg} hostName={hostName} />

      <Text variant="B2_Medium" color="gray-600">
        {hostDes}
      </Text>
    </div>
  );
}
