import { axiosInstance } from '@/axiosInstance'
import { useQuery } from '@tanstack/react-query'

export const useGetAllCoords = () => {
    const {
        data: allCoords,
        isFetching: isFetchingAllCoords,
        refetch: refetchAllCoords,
    } = useQuery({
        queryKey: ['get-all-coords'],
        queryFn: async () => {
            const { data } = await axiosInstance.get(`/coords/`)

            return data
        },
    })

    return {
        allCoords,
        isFetchingAllCoords,
        refetchAllCoords,
    }
}
