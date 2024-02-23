import React from "react";
import BannerGameDetail from "../components/BannerGameDetail";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
    const {id} = useParams();
    
    return(
        <div>
            <BannerGameDetail id={id} />
        </div>
    )
}

export default GameDetailPage