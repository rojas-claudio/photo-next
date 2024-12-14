'use client'

import { useTag } from '@/components/TagProvider'

export default function Navigation() {
    const { tag, setTag } = useTag()

    const buttons = [
        { label: "DEATH VALLEY", value: "DeathValley" },
        { label: "LOS ANGELES", value: "LosAngeles" },
        { label: "LAS VEGAS", value: "LasVegas" },
        { label: "CANADA", value: "Canada" },
    ]

    return (
        <>
            <nav className="pl-4 pt-4">
                <h1 className="pb-8">claudio rojas</h1>
                {buttons.map(({ label, value }) => (
                    <div key={value}> 
                        <button onClick={() => setTag(value)}>
                            {tag === value ? `> ${label}` : label}
                        </button>
                    </div>
                ))}

            </nav>
        </>
    )
}