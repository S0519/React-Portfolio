import React from "react";

const About = () => {
	return (
		<>
			<div className="shane_tm_section" id="about">
				<div className="shane_tm_about">
					<div className="container">
						<div className="about_inner">
							<div className="left">
								<div className="image">
									<img src="/img/placeholders/1-1.jpg" alt="placeholder" />
									<div
										className="main"
										style={{
											backgroundImage: `url("/img/about/smile02.png")`,
										}}
									></div>
								</div>
								{/* End image */}
							</div>
							{/* End left */}

							<div className="right">
								<div className="shane_tm_title">
									<span>About Me</span>
									<h3>Creative Independent Web Developer based in France</h3>
								</div>
								<div className="text">
									<p>
										I'm web designer, and I'm very passionate and dedicated to
										my work. With 3 years experience as a professional web
										developer, I have acquired the skills and knowledge
										necessary to make your project a success. I enjoy every step
										of the design process, from discussion and collaboration.
									</p>
								</div>
								<div className="shane_tm_button">
									<a href="/resume/again.pdf" download>
										Download CV
									</a>
								</div>
							</div>
							{/* End right */}
						</div>
					</div>
					{/* End container */}
				</div>
			</div>
		</>
	);
};

export default About;
