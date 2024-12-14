'use client'

import { useTag } from "@/components/TagProvider"
import { useEffect, useState } from "react"
import metadata from "../../../public/photos/photos.json"


export default function Gallery() {
    const [photos, loadPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { tag = "DefaultTag" } = useTag()

    useEffect(() => {
        async function preloadImages(tag: string | null) {
            setIsLoading(true)
            const filteredPhotos = metadata.photos.filter(photo => (tag ? photo.tag === tag : true))
            
            await Promise.all(
                filteredPhotos.map(photo => {
                    return new Promise<void>((resolve) => {
                        const img = new Image()
                        img.src = photo.path
                        img.onload = () => resolve()
                    })
                })
            )
        
            loadPhotos(filteredPhotos)
            setIsLoading(false)
        }
        preloadImages(tag)
    }, [tag])

    if (isLoading) {
        return (
            <div className="sm:columns-1 md:columns-2 lg:columns-3 gap-5 px-10 pt-10 flex-nowrap">
                <div className="w-128 h-64 bg-gray-900 animate-pulse mb-5"/>
                <div className="w-128 h-72 bg-gray-900 animate-pulse mb-5"/>
                <div className="w-128 h-64 bg-gray-900 animate-pulse mb-5"/>
                <div className="w-128 h-64 bg-gray-900 animate-pulse mb-5"/>
            </div>
        )
    }

    return (
        <div className="sm:columns-1 md:columns-2 lg:columns-3 gap-5 px-10 pt-10">
            {photos.map(photo => (
                <div key={photo.path}>
                    <img className="mb-5" src={photo.path}/>
                </div>
            ))}
        </div>
    )
}

// export default function Gallery() {
//     const { tag } = useTag()

//     return (
//         <div className="sm:columns-1 md:columns-2 lg:columns-3 gap-5 px-10 pt-10">
//             {metadata.photos.filter(photo => (tag ? photo.tag === tag : true)).map(photo => (
//                 <div key={photo.path}>
//                     <img className="mb-5" src={photo.path}/>
//                 </div>
//             ))}
//         </div>
//     )
// }