interface SectionTitleProps {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className='flex w-full max-w-desk flex-col items-center px-12 pb-8 lg:pb-5 lg:items-start'>
      <h2 className='text-center text-3xl font-bold capitalize lg:text-left'>{title}</h2>
      <span className='mt-4 block h-px w-1/2 bg-gray-300 lg:w-1/4'></span>
    </div>
  )
}
