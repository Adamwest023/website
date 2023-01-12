import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SiteNavbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { Box, Typography, CardMedia, Grid, CardContent } from '@material-ui/core'
import { CardActionArea } from '@mui/material';
//photos for cards
import ReactFest from '../../assets/images/React-fest.png'
import FoodFestival from '../../assets/images/FoodFestival.png'
import Recipe from '../../assets/images/Recipe.png'
import Filmreel from '../../assets/images/Filmreel.png'
//Styling stich to bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';





const shooterReel = () => {
    window.location.href = "https://vimeo.com/672158658"
}
const reactFestChange = () => {
    window.location.href = "https://react-fest.herokuapp.com/"
}
const filmReelChange = () => {
    window.location.href = "https://vimeo.com/672158658"
}
const foodFestivalChange = () => {
    window.location.href = "https://adamwest023.github.io/food-festival/index.html#"
}
const codingChange = () => {
    window.location.href = "https://adamwest023.github.io/git-a-recipe/"
}
const Portfolio = () => {

    return (
        <>
            <SiteNavbar />
            <Container>
                <Row xs={1} md={2} className="g-4 mt-2">
                    <Col >
                        <Card alt="film reel" onClick={shooterReel} >
                            <Card.Img className="image" variant="top" src={Filmreel} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Film Reel</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col >
                        <Card alt="film reel" onClick={shooterReel} >
                            <Card.Img className="image" variant="top" src={Filmreel} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Drone Reel</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col p-2 g-col-6>
                        <Card alt="film reel" onClick={shooterReel} >
                            <Card.Img className="image" variant="top" src={Filmreel} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Hi I'm Travis</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col p-2 g-col-6>
                        <Card alt="film reel" onClick={shooterReel} >
                            <Card.Img className="image" variant="top" src={Filmreel} />
                            <div className='img-hover' >
                                <div className="image-overlay">
                                    <div className="img-title">Hi I'm Sevy</div>
                                </div>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Container>
            
            <Footer />
        </>
    )
}

export default Portfolio
