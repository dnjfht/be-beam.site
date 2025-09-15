import type { Banner } from '@/shared/types/entities';
import Slider from '../../../shared/components/common/Slider';

export default function MainVisualSlider({ banners }: { banners: Banner[] }) {
  return (
    <Slider
      datas={banners}
      isBtn={false}
      slideWidth="max-w-[1480px] rounded-none md:rounded-xl"
      slideHeight="h-[220px] md:h-[280px] lg:h-[400px]"
    />
  );
}
