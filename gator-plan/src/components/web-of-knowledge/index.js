import MainContainer from "./layout/MainContainer";
import React, {useState, useContext} from "react";
import ReactDOM from 'react-dom/client';
import Header from "./layout/Header";
import Modal from "./modal/Modal";
import CartContext from "./modal/modalContext";
import contentData from "./contentData";
import Loader from "./layout/Loader";
import Footer from "./layout/Footer";
import { YoutubeBanner } from "./components/YoutubeBanner";
import { ModalContextProvider } from "./modal/modalContext";

const RoadMap = (props) => {

    const { currentTopicTitle } = useContext(CartContext);
    const { topic } = props;

    return (
        <ModalContextProvider>
            <div>
                <Modal topicData={contentData[topic]} />
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
