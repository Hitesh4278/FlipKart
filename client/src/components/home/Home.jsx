import { Fragment } from "react";// fragment is used in place of div of banner and navabr
//Fragment does not create any extra node and is fast or 
//or you can use empty bracket in place of fragment
import { useEffect } from "react";
//components Import
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { Box } from "@mui/system";
import { styled } from '@mui/material';
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)
`
padding :10px 10px;
background:#F2F2F2;
`


const Home = () => {
    //dono parent component h isliye ek sath return nhi hota  //banner and navbar so we should wrap it

    const { products } = useSelector(state => state.getProducts)
    // const {products}=getProducts;//object destructing method
    // console.log(products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of The Day" timer={true} />
                <MidSection/>
                <Slide products={products} title="Discount For You" timer={false} />
                <Slide products={products} title="Suggested Items" timer={false} />
                <Slide products={products} title="Top Seection" timer={false} />
                <Slide products={products} title="Recommended Items" timer={false} />
                <Slide products={products} title="Trending Offers" timer={false} />
            </Component>
        </>

    )
}
export default Home;
