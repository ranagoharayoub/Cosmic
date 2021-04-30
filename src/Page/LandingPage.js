import React from 'react'
import MainPage from '../Components/MainPage'
import GetStarted from '../Components/GetStarted'
import RunningBusiness from '../Components/RunningBusiness'
import Marketing from '../Components/Marketing'
import FreedomForYou from '../Components/FreedomForYou'
import './LandingPage.css'

function LandingPage() {
    return (
        <div>
            <MainPage></MainPage>
            <GetStarted></GetStarted>
            <RunningBusiness></RunningBusiness>
            <Marketing></Marketing>
            <FreedomForYou></FreedomForYou>
        </div>
    )
}

export default LandingPage
