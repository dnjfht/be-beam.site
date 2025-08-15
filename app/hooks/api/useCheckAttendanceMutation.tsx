import { checkAttendance } from '@/shared/api/endpoints/users';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { APIResponse } from '@/shared/types/api';
import type { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export default function useCheckAttendanceMutation(meetingId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      scheduleId: number;
      userId: number;
      status: string;
    }) => checkAttendance(meetingId, data),
    onSuccess: () => {
      toast.success('출석체크를 진행하였습니다.');
      queryClient.invalidateQueries({ queryKey: ['attendance'] });
    },
    onError: (err: AxiosError<APIResponse<string>>) => {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error('출석체크를 실패하였습니다. 다시 시도해주세요.');
        console.error('Meeting cancellation failed:', err);
      }
    },
  });
}
