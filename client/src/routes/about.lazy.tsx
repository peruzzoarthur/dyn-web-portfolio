import { Button } from '@/components/ui/button'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
    component: About,
})

function About() {
    const handleError = () => {
        throw new Error('Test err0r')
    }
    return (
        <>
            <div className="p-2 text-5xl">Hello from About!</div>
            <Button onClick={handleError}>Trigger</Button>
        </>
    )
}
