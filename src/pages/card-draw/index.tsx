import React, {Component, useRef, useState} from 'react';
import './index.css';
import {Carousel,Image} from 'antd';
import OperatorCard from "./components/operator-card"

const CardDraw = () => {
    const ref = useRef<any>(null);
    const [autoFlag,setAutoFlag] = useState(false);
    const [autoSpeed,setAutoSpeed] = useState(180);
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
    const click = () => {
        setAutoFlag(!autoFlag);
        const speedList = [500,400,300,200,200,200,300,400,500]
        let time = 2000;
        setAutoSpeed(speedList[0])
        speedList.forEach(x=> {
            setTimeout(()=> {
                setAutoSpeed(x);
            },time)
            time += 2000;
        })
        setTimeout(()=> {
            setAutoFlag(false)
        },time)
    }
    function importAll(r) {
        let images:string[] = [];
        r.keys().map((item, index) => { images.push( r(item).default)});
        return images.filter(x=>new RegExp('.*_2[b]*\.png').test(x));

    }
    const images = importAll(require.context('../../assert/arknights/images', false, /\.(png|jpe?g|svg)$/));
    return (
        <div onWheel={(e)=> wheel(e)}>
            <Carousel
                speed={20}
                ref={ref}
                autoplay={autoFlag}
                autoplaySpeed={autoSpeed}
                pauseOnHover={true}
                slidesToShow={1}
                infinite={true}
            >
                {
                    [...images].map((url,i) => {
                            return <OperatorCard
                                key={i}
                                src={url}
                                width={500}
                                height={500}
                                operatorName={"name"}
                                operatorStars={"★★★★★★"}
                                />
                    })
                }
            </Carousel>
            <button onClick={() => click()} >click</button>
        </div>
    )
}

export default CardDraw;



