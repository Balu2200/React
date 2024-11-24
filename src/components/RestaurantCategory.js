import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data,showItems, setshowIndex}) => {

    const handleClick = () =>{
        setshowIndex();
    }
    return (
        <div>
            <div className="w-full mx-auto my-4 rounded-md bg-gray-350 shadow-lg p-4">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-md">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>

                {showItems && <ItemList items={data.itemCards} />}

            </div>
        </div>
    );
};

export default RestaurantCategory;