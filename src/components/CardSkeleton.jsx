import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
      <Skeleton height={120} className="mb-4" />
      <Skeleton height={28} width="60%" className="mb-2" />
      <Skeleton height={36} width="40%" className="mb-4" />
      <div className="space-y-2">
        <Skeleton count={4} height={20} />
      </div>
      <div className="mt-auto pt-4">
        <Skeleton height={48} />
      </div>
    </div>
  )
}
