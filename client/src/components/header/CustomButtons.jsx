import { Badge, Box, Button, styled, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material'
import { useState, useCallback, useContext } from 'react';
import { useSelector } from 'react-redux';
import { LoginContext } from '../../context/ContextProvider';
import { Link } from 'react-router-dom';
//component
import Profile from './Profile';
import LoginDialog from '../login/LoginDialog';
import CartItem from '../cart/CartItem';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > * ': {
        marginRight: '40px !important',
        fontSize: '16px',
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }

}))
const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }

}))

const LoginButton = styled(Button)`
color:#2846f0;
background :#ffffff;
text-transform:none;
padding: 5px 30px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;

`

const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);
    const { cartItems } = useSelector(state => state.cart);
    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>

            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3, width: 135 }}>More</Typography>

            <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Wrapper>
    )
}
export default CustomButtons;