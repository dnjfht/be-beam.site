// dumb 패턴 컴포넌트. UI 관련 로직만

import { useEffect, useRef, useState } from 'react';
import MeetingDetailContentHostProfile from '../molecules/MeetingDetailContentHostProfile';
import TitleAndDes from '../molecules/TitleAndDes';
import Text from '../atoms/text/Text';

interface MeetingDetailContentBottomProps {
  hostImg: string;
  hostName: string;
  hostDes: string;
}

export default function MeetingDetailContentBottom({
  hostImg,
  hostName,
  hostDes,
}: MeetingDetailContentBottomProps) {
  const profileRef = useRef<HTMLDivElement>(null);
  const [profileHeight, setProfileHeight] = useState(0);

  useEffect(() => {
    if (profileRef.current) {
      setProfileHeight(profileRef.current.offsetHeight);
    }
  }, [hostImg, hostName]);

  return (
    <TitleAndDes title="호스트 정보" wrapStyle="w-full">
      <div className="box-border flex w-full items-stretch gap-14 rounded-xl bg-gray-100 px-10 py-7">
        <MeetingDetailContentHostProfile
          profileRef={profileRef}
          hostImg={hostImg}
          hostName={hostName}
        />

        <div
          style={{ height: `${profileHeight}px` }}
          className="box-border h-full w-full flex-1 rounded-lg bg-white p-4"
        >
          <Text variant="B2_Medium" color="gray-600">
            {hostDes}
          </Text>
        </div>
      </div>
    </TitleAndDes>
  );
}
