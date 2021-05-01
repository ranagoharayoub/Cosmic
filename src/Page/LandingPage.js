import React from 'react'
import MainPage from '../Components/MainPage'
import GetStarted from '../Components/GetStarted'
import RunningBusiness from '../Components/RunningBusiness'
import Marketing from '../Components/Marketing'
import FreedomForYou from '../Components/FreedomForYou'
import './LandingPage.css'
import GetApps from '../Components/GetApps'
import SignUp from '../Components/SignUp'
import HeadStart from '../Components/HeadStart'

function LandingPage() {
    return (
        <div className='main-div'>
            <MainPage></MainPage>
            <GetStarted></GetStarted>
            <RunningBusiness></RunningBusiness>
            <Marketing></Marketing>
            <FreedomForYou></FreedomForYou>
            <HeadStart></HeadStart>
            <GetApps></GetApps>
            <SignUp></SignUp>
        </div>
    )
}

export default LandingPage
