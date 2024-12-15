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
            <div className="flex flex-col lg:h-screen px-10 pt-10 lg:pl-4 lg:pt-4">
                <div>
                    <h1 className="pb-8">claudio rojas</h1>
                </div>
                <div className="grow-0 lg:flex-grow">
                    <div>
                        {buttons.map(({ label, value }) => (
                            <div key={value}> 
                                <button onClick={() => setTag(value)}>
                                    {tag === value ? `> ${label}` : label}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pt-8 pb-4">
                    <a target="_blank" href="https://rojas.darkroom.com">prints</a>
                    <br></br>
                    <a target="_blank" href="https://instagram.com/rojas.photo">instagram</a>
                </div>
            </div>

        </>
    )
}