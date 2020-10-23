import "./App.css";

function App() {
	return (
		<div className="layout">
			<h1 className="heading">Colleges in North India</h1>
			<div className="wrapper">
				<div className="college-section">
					<div className="img-wrapper">
						<div className="img">
							<div className="img-status">
								<p>PROMOTED</p>
							</div>
							<div className="score">
								<p>
									<span className="mark">3.9</span>/5
								</p>
								<p>Very Good</p>
							</div>
							<div className="img-tag-left">
								<p className="img-tag-left-left">Best college 2018</p>
								<p className="img-tag-left-right">2kms away</p>
							</div>
							<div className="img-tag-right">
								<p>#7 in 260 coolleges in north campus</p>
							</div>
						</div>
					</div>
					<div className="college-description">
						<div className="college-description-left">
							<div style={{ display: "flex" }}>
								<h1 className="college-name">
									Hansraj College Delhi University
								</h1>
								<div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
							</div>

							<p className="college-address">
								Near Vishwavidyalaya Meteo Srtation{" "}
								<span>| 2 Kms away from bus stand</span>
							</p>
							<p className="college-direction">
								<span style={{ color: "#37b396", fontWeight: "bold" }}>
									93% Match :
								</span>
								<span style={{ color: "#444444", fontWeight: "bold" }}>
									{" "}
									2.5kms
								</span>{" "}
								from GTB Nagar,
								<span style={{ color: "#444444", fontWeight: "bold" }}>
									{" "}
									7 Kms
								</span>{" "}
								from Rajiv Chowk
							</p>
						</div>
						<div className="college-description-right">
							<p className="price">₹6,8756</p>
							<p className="discounted-price">₹ 5,768</p>
							<p className="time-duration">Per Semester (3months)</p>
						</div>
					</div>
					<div className="price-detail">
						<div className="price-detail-left">
							<p>
								<span style={{ fontWeight: "400" }}>Flat</span> Rs
								<span style={{ color: "#4bb89e" }}>2,000</span> off + upto Rs
								<span style={{ color: "#4bb89e" }}>500</span> wallet! to
								avail...<span style={{ color: "#1999d2" }}> LOGIN</span>{" "}
							</p>
						</div>
						<div className="price-detail-right">
							<p>Free Cancellation</p>
							<p className="dot"> &#x2022;</p>
							<p>Free Wi-Fi</p>
						</div>
					</div>
				</div>
				<div className="college-section">
					<div className="img-wrapper">
						<div className="img">
							<div className="img-status">
								<p>PROMOTED</p>
							</div>
							<div className="score">
								<p>
									<span className="mark">3.9</span>/5
								</p>
								<p>Very Good</p>
							</div>
							<div className="img-tag-left">
								<p className="img-tag-left-left">Best college 2018</p>
								<p className="img-tag-left-right">2kms away</p>
							</div>
							<div className="img-tag-right">
								<p>#7 in 260 coolleges in north campus</p>
							</div>
						</div>
					</div>
					<div className="college-description">
						<div className="college-description-left">
							<h1 className="college-name">Hansraj College Delhi University</h1>
							<p className="college-address">
								Near Vishwavidyalaya Meteo Srtation{" "}
								<span>| 2 Kms away from bus stand</span>
							</p>
							<p className="college-direction">
								<span style={{ color: "#37b396", fontWeight: "bold" }}>
									93% Match :
								</span>
								<span style={{ color: "#444444", fontWeight: "bold" }}>
									{" "}
									2.5kms
								</span>{" "}
								from GTB Nagar,
								<span style={{ color: "#444444", fontWeight: "bold" }}>
									{" "}
									7 Kms
								</span>{" "}
								from Rajiv Chowk
							</p>
						</div>
						<div className="college-description-right">
							<p className="price">₹6,8756</p>
							<p className="discounted-price">₹ 5,768</p>
							<p className="time-duration">Per Semester (3months)</p>
						</div>
					</div>
					<div className="price-detail">
						<div className="price-detail-left">
							<p>
								<span style={{ fontWeight: "400" }}>Flat</span> Rs
								<span style={{ color: "#4bb89e" }}>2,000</span> off + upto Rs
								<span style={{ color: "#4bb89e" }}>500</span> wallet! to
								avail...<span style={{ color: "#1999d2" }}> LOGIN</span>{" "}
							</p>
						</div>
						<div className="price-detail-right">
							<p>Free Cancellation</p>
							<p className="dot"> &#x2022;</p>
							<p>Free Wi-Fi</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
