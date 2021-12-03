import React, {Component, useRef} from 'react';
import './index.css';
import {Carousel,Image} from 'antd';
import OperatorCard from "./components/operator-card"

const CardDraw = () => {
    const ref = useRef<any>(null);

    const goTo = (slide) => {
        ref.current.goTo(slide,false);
    }
    const next = () => {
        ref.current.next();
    }
    const prev = () => {
        ref?.current.prev();
    }
    const wheel = (e) => {
        e.deltaY > 0 ? next() : prev();
    }
    function importAll(r) {
        let images:string[] = [];
        r.keys().map((item, index) => { images.push( r(item).default)});
        console.log(images)
        return images.slice(10);

    }
    const images = importAll(require.context('../../assert/arknights/images', false, /\.(png|jpe?g|svg)$/));
    return (
        <div onWheel={(e)=> wheel(e)}>
            <Carousel speed={20} ref={ref}>
                {
                    [...images].map((url,i) => {
                            return <OperatorCard
                                key={i}
                                src={url}
                                operatorName={"name"}
                                operatorStars={"★★★★★★"}
                                />
                    })
                }
            </Carousel>
            <button onClick={() => prev()} >prev</button>
            <button onClick={() => next()} >next</button>
        </div>
    )
}

export default CardDraw;



