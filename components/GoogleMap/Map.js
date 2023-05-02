import GoogleMapReact from "google-map-react";
export default function Map() {
	const location = {
		center: {
			lat: 50.9820834,
			lng: 6.919962,
		},
		zoom: 15,
	};
	const AnyReactComponent = ({ text }) => <div>{text}</div>;
	return (
		<GoogleMapReact
			bootstrapURLKeys={{ key: "AIzaSyCHeGBKMN9XF2Kg9Rhg5HenVlCQtD6fpUg" }}
			defaultCenter={location.center}
			defaultZoom={location.zoom}
		>
			<AnyReactComponent lat={location.center.lat} lng={location.center.lng} />
		</GoogleMapReact>
	);
}
