import React from 'react'
import MainPage from '../Components/MainPage'
import GetStarted from '../Components/GetStarted'
import RunningBusiness from '../Components/RunningBusiness'
import Marketing from '../Components/Marketing'
import FreedomForYou from '../Components/FreedomForYou'
import './LandingPage.css'
import { Table } from '../Components/Table'

function LandingPage() {
    return (
        <div className='main-div'>
            <MainPage></MainPage>
            <GetStarted></GetStarted>
            <RunningBusiness></RunningBusiness>
            <Marketing></Marketing>
            <FreedomForYou></FreedomForYou>
            <Table/>
        </div>
    )
}

export default LandingPage
