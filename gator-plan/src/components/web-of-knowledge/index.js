import MainContainer from "./layout/MainContainer";
import {React, useState, useEffect, useContext } from "react";
import Header from "./layout/Header";
import Modal from "./modal/Modal";
import CartContext from "./modal/modalContext";
import contentData from "./contentData";
import Loader from "./layout/Loader";
import Footer from "./layout/Footer";
import { YoutubeBanner } from "./components/YoutubeBanner";
import { ModalContextProvider } from "./modal/modalContext";

function RoadMap () {
    const { currentTopicTitle } = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 100);
    }, []);

    setIsLoading(false);
    console.log(CartContext);
    const topicData = contentData["CMPSC Major"];

    return (
        <ModalContextProvider>
            <div>
                <Modal topicData={topicData} />
                    <main>
                        <Header></Header>
                        <MainContainer></MainContainer>
                    </main>
                    <Footer></Footer>
            </div>
        </ModalContextProvider>
    );
}

export default RoadMap;

