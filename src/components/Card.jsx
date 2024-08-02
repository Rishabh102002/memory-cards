export default function Card({ imageUrl, name, handleClick }) {

    return (
        <div
            onClick={() => handleClick(name)}
            onMouseDown={(event)=>{event.preventDefault()}}
            className="flex flex-col bg-[#F0F0F3] w-[200px] h-[250px] rounded-2xl justify-center items-center shadow-neomorph hover:shadow-none active:shadow-neomorphclicked">
            <img src={imageUrl} className="w-[150px] h-[150px]" />
            <p className="font-jura font-medium text-[#72727f]">{name}</p>
        </div>
    );
}
