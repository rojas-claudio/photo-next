import '@/app/globals.css'

import Sidebar from '@/components/sidebar'
import { TagProvider } from '@/components/TagProvider'

export default function About() {
    return ( 
        <>
            <div className={"flex flex-col lg:flex-row h-screen antialiased"}>
                <TagProvider>

                    <div className="w-full lg:h-full lg:w-1/6 lg:fixed">
                        <Sidebar />
                    </div>

                    <div className="w-full flex h-full justify-center items-center flex-grow lg:ml-auto">
                        <div className="max-w-md">
                            <div className="text-pretty px-10 lg:px-4 ">
                                Hi, I&apos;m Claudio. I&apos;m a hobbyist film photographer based in Las Vegas, Nevada, and I have been taking pictures for the better part of two decades. 
                                Currently, I shoot with a Minolta SRT-101 and Zenza Bronica ETRS. If you like my work, feel free to check out my Instagram or print store.
                            </div>
                        </div>
                    </div>

                </TagProvider>
            </div>
        </>
    )   
}