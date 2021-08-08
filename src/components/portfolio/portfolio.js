import React, {useEffect, useState} from "react";
import Project from "../project/project";

const Portfolio = () => {
	const [projects, setProjects] = useState([]);
	//   get the projects from the json
	//   loop through the projects and display them in a grid
	//   on click send the information to the modal

	const getData=()=>{
		fetch('/data/project.json'
			,{
				headers : {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}
		)
			.then(response => response.json())
			.then(data => {
				setProjects(data);
			});
	}

	useEffect(()=>{
		getData()
	},[])

	return (
		<div className="shane_tm_section" id="portfolio">
			<div className="shane_tm_portfolio">
				<div className="container">
					<div className="positon-relative">
						<div className="shane_tm_title">
							<div className="title_flex">
								<div className="left">
									<span>Portfolio</span>
									<h3>Creative Portfolio</h3>
								</div>
							</div>
							<div className="portfolio-pieces">
								{projects && projects.length > 0 ? projects.map((singleProject, idx) =>
									<Project key={idx} project={singleProject}/>) : ''}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
