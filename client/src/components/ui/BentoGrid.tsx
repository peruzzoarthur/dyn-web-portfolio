import { cn } from '@/lib/utils'
import { BackgroundGradientAnimation } from './GradientBg'

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string
    children?: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
                className
            )}
        >
            {children}
        </div>
    )
}

export const BentoGridItem = ({
    className,
    title,
    description,
    // header,
    icon,
    id,
    img,
    imgClassName,
    // titleClassName,
    spareImg,
}: {
    className?: string
    title?: string | React.ReactNode
    description?: string | React.ReactNode
    header?: React.ReactNode
    icon?: React.ReactNode
    id: number
    img?: string
    imgClassName: string
    titleClassName?: string
    spareImg?: string
}) => {
    console.log(id)

    return (
        <div
            className={cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
                'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
                className
            )}
            style={{
                background: 'rgb(19, 93, 102)',
                backgroundColor:
                    'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(65,121,9,1) 86%, rgba(112,161,94,1) 100%)',
            }}
        >
            <div className={`${id === 6} && 'flex justify-center h-full'`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(
                                imgClassName,
                                'object-cover, object-center'
                            )}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5} && 'w-full opacity-80`}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover, object-center, w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
                    </BackgroundGradientAnimation>
                )}
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    )
}
