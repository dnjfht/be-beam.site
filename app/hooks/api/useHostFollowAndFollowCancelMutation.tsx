import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios';
import { API_V1_BASE_URL } from '@/constants/api';

import type { Host } from '@/types/entities';
import toast from 'react-hot-toast';

export default function useHostFollowAndFollowCancelMutation(
  id: number,
  host: Host,
  refetchKey: string,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return axiosInstance({
        baseURL: API_V1_BASE_URL,
        method: host?.followed ? 'DELETE' : 'POST',
        url: `/follows/${id}`,
      });
    },
    onSuccess: () => {
      toast.success(
        host?.followed
          ? '호스트 팔로우를 취소하였습니다.'
          : '호스트를 팔로우하였습니다.',
      );
      queryClient.invalidateQueries({ queryKey: [refetchKey] });
      close();
    },
    onError: (err) => {
      toast.error(
        `${host?.followed ? '호스트 팔로우 취소를 실패하였습니다.' : '호스트 팔로우를 실패하였습니다.'} 다시 시도해주세요.`,
      );
      console.error('Failed to follow host:', err);
    },
  });
}
