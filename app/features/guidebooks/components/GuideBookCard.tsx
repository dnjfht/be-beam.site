import { useNavigate } from 'react-router';
import type { GuidebookSummary } from '@/shared/types/entities';

export default function GuideBookCard({ data }: { data: GuidebookSummary }) {
  const navigate = useNavigate();

  return (
    <div
      className="w-full cursor-pointer"
      key={data.id}
      onClick={() => navigate(`/guideBook/${data.id}`)}
      title={data.title}
    >
      <img
        className="aspect-square w-full rounded-3xl border border-gray-300 object-cover"
        src={data.thumbnailImage}
        alt={data.title}
      />
    </div>
  );
}
