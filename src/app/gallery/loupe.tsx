export default function Loupe({ photos, index, onClose }) {
    return (
        <>
            <div className="fixed flex-col inset-0 z-50 bg-black bg-opacity-90 flex">
                <div className="w-full flex justify-end pr-4 pt-4">
                    <button className="text-white" onClick={onClose}>close</button>
                </div>
                <div className="flex h-full justify-center items-center">
                    <div className="">
                        <div className="relative w-full">
                            <img src={photos[index].path} className="justify-center items-center px-10 pb-4"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}