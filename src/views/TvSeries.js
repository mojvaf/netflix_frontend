
import Slider from "react-slick";

export default class TvSeries extends Component {
    state = { series: null }
    componentDidMount() {
        fetch('http://localhost:4000/series')
            .then(res => res.json())
            .then(data => this.setState({ ...this.state, series: data }))
    }
    render() {
        console.log('state', this.state.series)
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div>
                <h2>Center Mode</h2>
                <Slider {...settings}>
                    {
                        this.state.series && this.state.series.map((serie) => {
                           return ( <div>
                                <img src={serie.pic} alt="" />
                            </div> 
                           )
                        })
                    }

                </Slider>
            </div>
        );
    }
}
{/* <div>
    <img src="" alt="" />
</div> */}