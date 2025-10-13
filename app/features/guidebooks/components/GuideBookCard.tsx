import Text from '../../../shared/components/ui/Text';
import { useNavigate } from 'react-router';
import type { GuidebookSummary } from '@/shared/types/entities';

export default function GuideBookCard({ data }: { data: GuidebookSummary }) {
  const navigate = useNavigate();

  return (
    <div
      className="w-full cursor-pointer"
      key={data.id}
      onClick={() => navigate(`/guideBook/${data.id}`)}
    >
      <img
        className="aspect-square w-full rounded-xl border border-gray-200 object-cover"
        src={data.thumbnailImage}
        alt="guidBook_thumbnail"
      />
      <div className="mt-4 box-border w-full">
        <Text variant="T2_Semibold" className="line-clamp-2">
          {data.title}
        </Text>
        {/* <Text
          variant="T4_Regular"
          color="gray-700"
          className="mt-3 line-clamp-2"
        >
          {data.description}
        </Text> */}
      </div>
    </div>
  );
}
