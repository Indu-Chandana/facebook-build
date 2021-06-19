import Image from "next/image";
function SidebarRow({ src, Icon, title }) {
    return (
        <div className="flex items-center space-x-2 p-4
        hover:bg-gray-200 rounded-xl cursor-pointer relative">
            {src && (
                <Image
                className="rounded-full absolute bg-green-400 h-4 w-4"
                src={src}
                width={30}
                height={30}
                layout="fixed"
                />
            )}
            {Icon &&  ( <Icon className="h-8 w-8 text-blue-500"/>)}
            <p className="hidden sm:inline-flex font-medium">{title}</p>
            
        </div>
    )
}

export default SidebarRow
