import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Home, PersonStanding } from 'lucide-react'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav
                    navItems={[
                        { name: 'Home', link: '/', icon: <Home /> },
                        {
                            name: 'About',
                            link: '/cv',
                            icon: <PersonStanding />,
                        },
                    ]}
                />
                <Hero />
                <Grid />
                <RecentProjects />
                <Footer />
            </div>
        </main>
    )
}
